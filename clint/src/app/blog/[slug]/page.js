import Image from "next/image";

// ✅ Ensure this runs on every request (SSR)
export const dynamic = "force-dynamic";

// ✅ Dynamic metadata for each blog
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blog metadata");

    const data = await res.json();
    const blog = data.blog;

    return {
      title: blog.title || "CareKwik Blog",
      description: blog.metaDescription || blog.excerpt || "Read our latest healthcare insights.",
      keywords: blog.metaKeywords || "healthcare, carekwik, blog, elder care, physiotherapy",
      openGraph: {
        title: blog.title,
        description: blog.metaDescription || blog.excerpt,
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog/${slug}`,
        images: [
          {
            url: blog.coverImage,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.metaDescription || blog.excerpt,
        images: [blog.coverImage],
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);
    return {
      title: "CareKwik Blog",
      description: "Explore trusted health and wellness articles by CareKwik.",
    };
  }
}

// ✅ Main Blog Page
export default async function BlogDetails({ params }) {
  const { slug } = params;

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
