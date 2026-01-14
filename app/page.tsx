/* eslint-disable @next/next/no-img-element -- Remote sample images come from BigModel docs. */
import Generator from "./components/Generator";

export default function Home() {
  const features = [
    {
      title: "Text-first rendering",
      description:
        "GLM-Image excels at layouts with titles, captions, and dense copy, ideal for posters and infographics.",
    },
    {
      title: "Multi-resolution output",
      description:
        "Generate square, portrait, and landscape images with preset or custom sizes from 512 to 2048.",
    },
    {
      title: "No backend required",
      description:
        "Use your own BigModel API key and call the model directly from your browser.",
    },
  ];

  const gallery = [
    {
      title: "Science illustration",
      url: "https://cdn.bigmodel.cn/markdown/1768305506516image.png?attname=image.png",
    },
    {
      title: "Product poster",
      url: "https://cdn.bigmodel.cn/markdown/1768305604344image.png?attname=image.png",
    },
    {
      title: "Social card",
      url: "https://cdn.bigmodel.cn/markdown/1768308056990image.png?attname=image.png",
    },
    {
      title: "Brand layout",
      url: "https://cdn.bigmodel.cn/markdown/1768310696625image.png?attname=image.png",
    },
    {
      title: "Typography test",
      url: "https://cdn.bigmodel.cn/markdown/1768310904165image.png?attname=image.png",
    },
    {
      title: "Illustrated scene",
      url: "https://cdn.bigmodel.cn/markdown/1768309855615image.png?attname=image.png",
    },
  ];

  const faqs = [
    {
      q: "Is GLMmaker free?",
      a: "The studio is free. You bring your own BigModel API key, which may have its own pricing or free tier.",
    },
    {
      q: "Where does my API key go?",
      a: "Your key stays in your browser and is sent only to the BigModel API endpoint when you generate.",
    },
    {
      q: "Can I use custom sizes?",
      a: "Yes. Width and height must be between 512 and 2048 and divisible by 32.",
    },
    {
      q: "What do I get back?",
      a: "GLM-Image returns a URL to the generated image. Use the link to preview or download.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="orb orb-amber left-[-120px] top-[-120px]" />
        <div className="orb orb-teal right-[-140px] top-[120px]" />
        <div className="orb orb-rose left-[20%] top-[520px]" />
      </div>

      <header className="px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-6">
          <a className="font-display text-2xl tracking-tight" href="#">
            GLMmaker
          </a>
          <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--ink-soft)] md:flex">
            <a href="#studio">Studio</a>
            <a href="#gallery">Gallery</a>
            <a
              href="https://docs.bigmodel.cn/cn/guide/models/image-generation/glm-image"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </div>
          <a className="btn btn-primary text-sm" href="#studio">
            Launch studio
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="grid gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="tag">Open source</span>
              <span className="tag">Text to image</span>
              <span className="tag">Free studio</span>
            </div>
            <h1 className="font-display text-4xl leading-tight sm:text-5xl">
              Free <span className="text-gradient">GLM-Image</span> studio for
              posters, diagrams, and social graphics.
            </h1>
            <p className="text-lg subtle">
              GLMmaker helps you explore the open-source GLM-Image model fast.
              Paste your API key, write a prompt, and generate multi-resolution
              images in seconds.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="btn btn-primary" href="#studio">
                Generate free
              </a>
              <a
                className="btn btn-ghost"
                href="https://docs.bigmodel.cn/cn/guide/models/image-generation/glm-image"
                target="_blank"
                rel="noreferrer"
              >
                GLM-Image docs
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              <span>Prompt presets</span>
              <span>Custom sizes</span>
              <span>Direct API</span>
            </div>
          </div>

          <div className="panel reveal reveal-delay-1 p-6">
            <div className="flex items-center justify-between">
              <span className="tag">Studio preview</span>
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                GLM-Image
              </span>
            </div>
            <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                Sample output
              </p>
              <h3 className="font-display mt-3 text-2xl">
                Brew the Galaxy
              </h3>
              <p className="mt-2 text-sm subtle">
                A product poster with crisp typography, gradient lighting, and
                clean layout. GLM-Image excels at text-rich compositions.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-white/70 p-3 text-xs">
                  <p className="uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                    Resolution
                  </p>
                  <p className="mt-1 font-semibold">1280 x 1280</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white/70 p-3 text-xs">
                  <p className="uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
                    Output
                  </p>
                  <p className="mt-1 font-semibold">Image URL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-3xl">Why GLMmaker</h2>
            <p className="subtle max-w-2xl">
              Built around the GLM-Image open-source release, this tool focuses
              on prompt clarity, resolution control, and zero setup.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="panel reveal p-6">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm subtle">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="studio"
          className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[0.9fr,1.1fr]"
        >
          <div className="grid gap-6">
            <span className="tag">GLMmaker studio</span>
            <h2 className="font-display text-3xl">
              Text to image for real layouts
            </h2>
            <p className="subtle">
              GLM-Image is built for structured visuals like posters, ads, and
              diagrams. Use detailed prompts with titles, labels, and layout
              directions for best results.
            </p>
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">Quick specs</h3>
              <ul className="mt-4 grid gap-3 text-sm subtle">
                <li>Model: glm-image</li>
                <li>Endpoint: /images/generations</li>
                <li>Output: image URL in response.data[0].url</li>
                <li>Sizes: 512-2048, multiples of 32</li>
              </ul>
            </div>
            <div className="panel p-6">
              <h3 className="text-lg font-semibold">Prompt tips</h3>
              <p className="mt-3 text-sm subtle">
                Include layout cues like headline, subtitle, footer notes, and
                clear alignment. Specify typography style and background
                texture.
              </p>
            </div>
          </div>

          <div className="panel p-6">
            <Generator />
          </div>
        </section>

        <section
          id="gallery"
          className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 pt-4"
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-3xl">GLM-Image gallery</h2>
            <p className="subtle max-w-2xl">
              Inspiration from GLM-Image sample outputs. Use these as starting
              points for your own prompts.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.url} className="panel p-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 pt-4">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-3xl">FAQ</h2>
            <p className="subtle max-w-2xl">
              Quick answers for GLM-Image beginners and SEO coverage.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="panel p-6">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm subtle">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 pb-10 pt-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm subtle md:flex-row md:items-center md:justify-between">
          <p>
            GLMmaker is an independent studio for the open-source GLM-Image
            model by BigModel.
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em]">
            <a
              href="https://docs.bigmodel.cn/cn/guide/models/image-generation/glm-image"
              target="_blank"
              rel="noreferrer"
            >
              API docs
            </a>
            <a href="#studio">Studio</a>
            <a href="#gallery">Gallery</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
