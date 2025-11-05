import { useState } from "react";
import { Upload, Image as ImageIcon, Link, DollarSign } from "lucide-react";

const defaultForm = {
  title: "",
  type: "Modpack",
  version: "",
  price: "0",
  fileUrl: "",
  imageUrl: "",
  description: "",
};

export default function UploadPanel({ onAdd }) {
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) return setError("Title is required");
    if (!form.version.trim()) return setError("Version is required");
    if (!form.fileUrl.trim()) return setError("Download URL is required");

    const product = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      type: form.type,
      version: form.version.trim(),
      price: Number(form.price) || 0,
      fileUrl: form.fileUrl.trim(),
      imageUrl: form.imageUrl.trim() || undefined,
      description: form.description.trim(),
      createdAt: new Date().toISOString(),
    };

    onAdd?.(product);
    setForm(defaultForm);
  };

  return (
    <section id="upload" className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Upload a product</h2>
              <p className="text-gray-600">Share a modpack, plugin, datapack, or resource pack.</p>
            </div>
            <Upload className="h-6 w-6 text-emerald-600" />
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Awesome Modpack"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option>Modpack</option>
                <option>Plugin</option>
                <option>Datapack</option>
                <option>Resource Pack</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Version</label>
              <input
                name="version"
                value={form.version}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="1.20.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1"><DollarSign className="h-4 w-4"/> Price (optional)</label>
              <input
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={form.price}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="0.00"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1"><Link className="h-4 w-4"/> Download URL</label>
              <input
                name="fileUrl"
                value={form.fileUrl}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="https://example.com/file.zip"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 flex items-center gap-1"><ImageIcon className="h-4 w-4"/> Cover image URL (optional)</label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="https://example.com/cover.png"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="What makes this creation special?"
              />
            </div>

            {error && (
              <div className="sm:col-span-2 text-sm text-red-600">{error}</div>
            )}

            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 text-white px-5 py-2.5 font-semibold hover:bg-emerald-700"
              >
                <Upload className="h-5 w-5"/>
                Upload product
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
