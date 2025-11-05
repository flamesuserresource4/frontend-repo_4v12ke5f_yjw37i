export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-white font-black text-xl tracking-tight">BlockForge</div>
          <p className="text-sm text-gray-400">A home for Minecraft modpacks, plugins, and creators.</p>
        </div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} BlockForge. Not affiliated with Mojang/Microsoft.
        </div>
      </div>
    </footer>
  );
}
