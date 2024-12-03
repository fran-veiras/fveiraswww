/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import Link from "next/link";
import React, { type Dispatch, type SetStateAction, useState } from "react";
import { type Post } from "~/lib/notion";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";

export const PostCard = ({ posts }: { posts: Post[] }) => {
  const [PostHover, setPostHover] = useState("");

  return (
    <div className="relative">
      {posts.map((post, index) => {
        return (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <PostComponent
              post={post}
              PostHover={PostHover}
              setPostHover={setPostHover}
            />
          </motion.div>
        );
      })}
      <div className="absolute left-2 top-0 h-full border-l border-dashed border-grey-lab/60" />
    </div>
  );
};

const PostComponent = ({
  post,
  PostHover,
  setPostHover,
}: {
  post: Post;
  PostHover: string;
  setPostHover: Dispatch<SetStateAction<string>>;
}) => {
  const title = post.properties.Name.title[0]?.text.content ?? "";
  const date = new Date(post.properties.Updated.last_edited_time);
  const formattedDate = date.toDateString();

  return (
    <Link href={`/posts/${post?.properties?.Slug.formula.string}`}>
      <div className="flex">
        <div style={{ position: "relative", width: "10px" }}>
          <div
            className={cn(
              "absolute -left-32 bottom-16 hidden min-w-52 -rotate-90",
              {
                "!block": PostHover === title,
              },
            )}
          >
            {formattedDate}
          </div>
        </div>
        <div
          className="flex"
          style={{
            width: "100%",
            position: "relative",
            borderRadius: "7px",
            padding: "0px 20px",
            cursor: "pointer",
            transition: "0.1s ease-in-out",
          }}
          onMouseEnter={() => setPostHover(title)}
        >
          <div
            className={cn(
              "flex w-full flex-row items-center justify-between rounded-lg p-4 transition-all",
              {
                "bg-grey-hover": title === PostHover,
              },
            )}
          >
            <h1>{title}</h1>
            <div
              className="text-black"
              style={{
                background: "#c2f5d4",
                padding: "2px 5px",
                borderRadius: "7px",
              }}
            >
              <h1>post</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
