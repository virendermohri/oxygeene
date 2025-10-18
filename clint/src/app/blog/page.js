import BlogCard from "@/components/BlogCard";

export const dynamic = "force-dynamic"; // ensures it’s always SSR (not static)

export default async function BlogsPage() {
  // ✅ Fetch blogs using standard fetch()
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    method: "GET",
    cache: "no-store", // no caching → always fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const blogs = data.blogs || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-10">
        CareKwik Health & Wellness Blog
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
