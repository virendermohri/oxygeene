import BlogCard from "@/components/BlogCard";

export const dynamic = "force-dynamic"; // ✅ Always SSR (no static cache)

// ✅ Define SEO metadata for the main Blog page
export const metadata = {
  title: "CareKwik Health & Wellness Blog | Trusted Home Care Insights",
  description:
    "Read the latest health care blogs from CareKwik. Discover expert advice on elder care, physiotherapy, mother & baby care, and more in Mohali, Chandigarh & Panchkula.",
  keywords:
    "carekwik blog, healthcare tips, elder care, physiotherapy, mother baby care, home care services Mohali, Chandigarh, Panchkula",
  openGraph: {
    title: "CareKwik Health & Wellness Blog",
    description:
      "Explore expert articles on elder care, physiotherapy, and home health services from CareKwik.",
    url: `www.carekwik.com/blog`,
    
  },
  
};

export default async function BlogsPage() {
  // ✅ Fetch blogs using SSR
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await res.json();
  const blogs = data.blogs || [];

  return (
    <div className="max-w-7xl  mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-emerald-700 mb-10">
        CareKwik Health & Wellness Blog
      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore trusted healthcare insights, home care tips, and expert advice
        from CareKwik’s professionals. Stay informed about physiotherapy,
        elder care, and mother & baby care services in your city.
      </p>

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
