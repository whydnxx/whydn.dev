import { getAllFeaturedPosts } from "@/lib/api";

export default function handler(req, res) {
  const featuredPost = getAllFeaturedPosts([
    "title",
    "date",
    "slug",
    "hero",
    "excerpt",
    "isFeatured",
  ]);

  res.status(200).json({ featuredPost });
}
