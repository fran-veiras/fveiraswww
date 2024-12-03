import Link from "next/link";
import { PostCard } from "~/components/posts/post-card";
import { fetchPages } from "~/lib/notion";

export default async function Posts() {
  const posts = await fetchPages();

  return (
    <div className="m-auto my-14 flex w-full flex-col gap-4 2xl:w-1/2">
      <Link href={"/"}>
        <div>
          <p className="text-sm transition-all hover:!text-gray-200">
            ⟵ Back to main
          </p>
        </div>
      </Link>
      <div className="flex flex-col gap-12">
        <em className="text-2xl">Posts</em>
        <PostCard posts={posts} />
      </div>
    </div>
  );
}
