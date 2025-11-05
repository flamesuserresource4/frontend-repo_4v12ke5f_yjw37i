import { useMemo, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import UploadPanel from "./components/UploadPanel";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  const [products, setProducts] = useState(() => {
    // Seed with a couple of demo items so the grid isn't empty on first load
    return [
      {
        id: "demo-1",
        title: "SkyRealms Modpack",
        type: "Modpack",
        version: "1.20.1",
        price: 0,
        fileUrl: "https://example.com/skyrealms.zip",
        imageUrl:
          "https://images.unsplash.com/photo-1614064641938-cf2c9542b2ba?q=80&w=1600&auto=format&fit=crop",
        description: "Exploration-focused pack with performance optimizations and 120+ curated mods.",
        createdAt: new Date().toISOString(),
      },
      {
        id: "demo-2",
        title: "EconomyPlus",
        type: "Plugin",
        version: "1.20",
        price: 4.99,
        fileUrl: "https://example.com/economyplus.jar",
        imageUrl:
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1600&auto=format&fit=crop",
        description: "Lightweight economy plugin with MySQL support and flexible permissions.",
        createdAt: new Date().toISOString(),
      },
    ];
  });

  const gridRef = useRef(null);

  const handleAddProduct = (p) => {
    setProducts((prev) => [p, ...prev]);
    // Scroll to grid after upload for immediate feedback
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const onExploreClick = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Optionally memoize sorted products (newest first)
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [products]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeroSection onExploreClick={onExploreClick} />
      <UploadPanel onAdd={handleAddProduct} />
      <div ref={gridRef}>
        <ProductGrid products={sortedProducts} />
      </div>
      <Footer />
    </div>
  );
}
