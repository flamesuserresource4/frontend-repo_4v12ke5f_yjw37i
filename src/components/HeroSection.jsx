import { Rocket, Package } from "lucide-react";

export default function HeroSection({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-600 via-emerald-700 to-emerald-900 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-lime-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-8 items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-inset ring-white/20">
            <Package className="h-4 w-4" />
            Minecraft Mods, Plugins & Modpacks
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Launch your Minecraft creations to the world
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-emerald-50/90">
            Upload, showcase, and share your modpacks and plugins in one place. Clean presentation, easy downloads, and a home for your community.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 rounded-md bg-white text-emerald-900 px-5 py-3 font-semibold shadow hover:shadow-lg transition-shadow"
            >
              <Rocket className="h-5 w-5" />
              Explore products
            </button>
            <a
              href="#upload"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500/20 text-white px-5 py-3 font-semibold ring-1 ring-inset ring-white/30 hover:bg-emerald-500/30"
            >
              Upload yours
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
