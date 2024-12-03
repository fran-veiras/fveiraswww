"use client";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { type Post } from "~/lib/notion";
import { motion } from "framer-motion";

export const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.4,
      }}
    >
      <h2 className="mb-4 text-sm text-grey-lab">Posts</h2>
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        {posts?.map((post) => {
          const postDescription =
            post?.properties?.Description?.rich_text?.[0]?.text?.content ?? "";

          return (
            <Link
              href={`/posts/${post?.properties?.Slug?.formula.string ?? ""}`}
              key={post.id}
              className="flex flex-col gap-4"
            >
              <h2 className="underline decoration-grey-lab/60 transition-all hover:decoration-grey-lab">
                {post?.properties?.Name?.title?.[0]?.text?.content ?? ""}
              </h2>
              <p className="text-sm">
                {postDescription?.length > 60
                  ? postDescription?.slice(0, 60) + "..."
                  : postDescription}
              </p>
            </Link>
          );
        })}
      </div>
      <Link
        href="/posts"
        className="mt-4 flex flex-row items-end gap-1 underline decoration-grey-lab/60 transition-all hover:decoration-grey-lab"
      >
        View all posts
        <MoveUpRight className="text-grey-lab/80" width={18} height={18} />
      </Link>
    </motion.div>
  );
};
