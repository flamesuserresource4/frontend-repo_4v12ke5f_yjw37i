import { Download, Star } from "lucide-react";

function ProductCard({ product }) {
  const fallbackImg =
    "https://images.unsplash.com/photo-1613541444695-c9c3d91f3c5b?q=80&w=1600&auto=format&fit=crop";

  return (
    <div className="group rounded-xl ring-1 ring-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl || fallbackImg}
          alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description || ""}</p>
          </div>
          <span className="shrink-0 inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-medium ring-1 ring-emerald-200">
            {product.type}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            v{product.version} • {product.price > 0 ? `$${product.price.toFixed(2)}` : "Free"}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.open(product.fileUrl, "_blank")}
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-3 py-2 text-sm font-medium hover:bg-emerald-700"
            >
              <Download className="h-4 w-4" /> Download
            </button>
            <button
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-gray-600 hover:text-emerald-700 hover:bg-emerald-50"
              title="Add to favorites"
              onClick={() => alert("Favoriting requires account — coming soon!")}
            >
              <Star className="h-4 w-4" />
              Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products }) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Latest uploads</h2>
            <p className="text-gray-600">Browse new modpacks, plugins, and more.</p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No products yet. Be the first to upload!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
