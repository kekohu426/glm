/* eslint-disable @next/next/no-img-element -- Remote image URLs are returned by the API. */
"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

const sizeOptions = [
  { value: "1280x1280", label: "1280 x 1280", note: "1:1" },
  { value: "1568x1056", label: "1568 x 1056", note: "3:4" },
  { value: "1056x1568", label: "1056 x 1568", note: "4:3" },
  { value: "1472x1088", label: "1472 x 1088", note: "4:3" },
  { value: "1088x1472", label: "1088 x 1472", note: "3:4" },
  { value: "1728x960", label: "1728 x 960", note: "16:9" },
  { value: "960x1728", label: "960 x 1728", note: "9:16" },
  { value: "custom", label: "Custom", note: "512-2048, multiple of 32" },
];

const promptPresets = [
  {
    label: "Poster",
    prompt:
      "A clean product poster for Nebula Tea, large headline text 'Brew the Galaxy', minimal layout, warm gradient background, tiny flavor notes at the bottom, studio lighting.",
  },
  {
    label: "Diagram",
    prompt:
      "An educational infographic titled 'How Solar Cells Work' with numbered steps, arrows, labels, flat vector style, white background, crisp typography.",
  },
  {
    label: "Social card",
    prompt:
      "Square social media card announcing 'GLM-Image Open Source', bold headline, smaller subtitle, collage textures, high contrast, editorial layout.",
  },
  {
    label: "Comic",
    prompt:
      "A four-panel comic strip about a robot barista, each panel labeled 1-4 with short captions, consistent style, bright palette.",
  },
];

const endpoint = "https://open.bigmodel.cn/api/paas/v4/images/generations";

const isMultipleOf32 = (value: number) => value % 32 === 0;

export default function Generator() {
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState(promptPresets[0].prompt);
  const [sizePreset, setSizePreset] = useState("1280x1280");
  const [customWidth, setCustomWidth] = useState("1280");
  const [customHeight, setCustomHeight] = useState("1280");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const sizeError = useMemo(() => {
    if (sizePreset !== "custom") return "";
    const width = Number(customWidth);
    const height = Number(customHeight);
    if (!width || !height) return "Enter both width and height.";
    if (width < 512 || height < 512 || width > 2048 || height > 2048) {
      return "Width and height must be between 512 and 2048.";
    }
    if (!isMultipleOf32(width) || !isMultipleOf32(height)) {
      return "Width and height must be multiples of 32.";
    }
    return "";
  }, [customHeight, customWidth, sizePreset]);

  const sizeValue =
    sizePreset === "custom"
      ? `${customWidth}x${customHeight}`
      : sizePreset;

  const canSubmit =
    !isLoading &&
    apiKey.trim().length > 0 &&
    prompt.trim().length > 0 &&
    !sizeError;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setCopied(false);

    if (!canSubmit) return;

    setIsLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "glm-image",
          prompt: prompt.trim(),
          size: sizeValue,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message =
          data?.error?.message ||
          data?.message ||
          `Request failed (${response.status})`;
        throw new Error(message);
      }

      const url = data?.data?.[0]?.url;
      if (!url) {
        throw new Error("No image URL returned. Try a different prompt.");
      }

      setResultUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!resultUrl) return;
    try {
      await navigator.clipboard.writeText(resultUrl);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-2">
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            API key
          </label>
          <input
            className="field"
            type="password"
            name="apiKey"
            placeholder="Paste your BigModel API key"
            value={apiKey}
            onChange={(event) => setApiKey(event.target.value)}
            autoComplete="off"
          />
          <p className="text-xs subtle">
            Calls go directly to BigModel from your browser. No server required.
          </p>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            Prompt
          </label>
          <textarea
            className="field min-h-[140px] resize-none"
            name="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {promptPresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className="tag"
                onClick={() => setPrompt(preset.prompt)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
            Resolution
          </label>
          <div className="grid gap-3 md:grid-cols-2">
            <select
              className="field"
              value={sizePreset}
              onChange={(event) => setSizePreset(event.target.value)}
            >
              {sizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} {option.note ? `(${option.note})` : ""}
                </option>
              ))}
            </select>
            {sizePreset === "custom" ? (
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="field"
                  type="number"
                  min={512}
                  max={2048}
                  step={32}
                  value={customWidth}
                  onChange={(event) => setCustomWidth(event.target.value)}
                  placeholder="Width"
                />
                <input
                  className="field"
                  type="number"
                  min={512}
                  max={2048}
                  step={32}
                  value={customHeight}
                  onChange={(event) => setCustomHeight(event.target.value)}
                  placeholder="Height"
                />
              </div>
            ) : (
              <div className="field flex items-center text-sm subtle">
                Custom sizes: 512-2048, multiples of 32.
              </div>
            )}
          </div>
          {sizeError ? (
            <p className="text-sm text-[#b42318]">{sizeError}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
            {isLoading ? "Generating..." : "Generate image"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setPrompt("");
              setResultUrl("");
              setError("");
            }}
          >
            Clear
          </button>
          <span className="text-xs subtle">
            Recommended sizes: 1280x1280, 1568x1056, 1056x1568.
          </span>
        </div>
      </form>

      <div className="grid gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Preview</h3>
          {resultUrl ? (
            <div className="flex items-center gap-3 text-xs subtle">
              <button className="tag" type="button" onClick={handleCopy}>
                {copied ? "Copied" : "Copy URL"}
              </button>
              <a
                className="tag"
                href={resultUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </div>
          ) : null}
        </div>
        <div className="grid place-items-center rounded-3xl border border-dashed border-black/15 bg-white/70 p-6 min-h-[260px]">
          {resultUrl ? (
            <img
              src={resultUrl}
              alt="Generated result"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          ) : (
            <div className="text-center text-sm subtle">
              Generated images appear here. Enter a prompt and generate.
            </div>
          )}
        </div>
        {error ? <p className="text-sm text-[#b42318]">{error}</p> : null}
      </div>
    </div>
  );
}
