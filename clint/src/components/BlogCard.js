import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col justify-between flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-emerald-600 font-medium text-sm">
            {blog.category}
          </span>
          <Link
            href={`/blog/${blog.slug}`}
            className="text-emerald-700 font-semibold hover:underline text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
