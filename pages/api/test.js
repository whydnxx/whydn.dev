import { getAllFeaturedPosts, getAllPosts } from "@/lib/api";

export default function handler(req, res) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "hero",
    "excerpt",
    "isFeatured",
  ]);

  res.status(200).json({ allPosts });
}
