const express = require("express");
const router = express.Router();
const Blog = require("../modles/blog");

// 📝 POST /api/blogs — Create new blog
router.post("/", async (req, res) => {
  try {
    const { title, slug, content, excerpt, category, tags, author, coverImage } = req.body;

    if (!title || !slug || !content) {
      return res.status(400).json({ error: "Title, slug, and content are required" });
    }

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({ error: "A blog with this slug already exists" });
    }

    const newBlog = new Blog({
      title,
      slug,
      excerpt,
      content,
      category: category || "General",
      tags: tags || [],
      author: author || "CareKwik Health Experts",
      coverImage:
        coverImage ||
        "https://res.cloudinary.com/divlt5fqo/image/upload/v1759319367/2-SM1085993_t3htyq.jpg",
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("Blog Creation Error:", error);
    res.status(500).json({ error: "Something went wrong while creating the blog" });
  }
});

// 📚 GET /api/blogs — Fetch all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// 🔍 GET /api/blogs/:slug — Fetch single blog by slug
router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

// ✏️ PUT /api/blogs/:id — Update blog
router.put("/:id", async (req, res) => {
  try {
    const { title, content, excerpt, category, tags, author, coverImage } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, excerpt, category, tags, author, coverImage },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// 🗑️ DELETE /api/blogs/:id — Delete a blog
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

module.exports = router;
