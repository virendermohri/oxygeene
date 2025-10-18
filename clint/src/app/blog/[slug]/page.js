import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function BlogDetails({ params }) {
  const { slug } = params;

  console.log("ll")
  // ✅ Fetch single blog by slug
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const data = await res.json();
  const blog = data.blog;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-8">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {blog.title}
      </h1>

      <p className="text-emerald-600 font-medium mb-6">{blog.category}</p>

      <article
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
