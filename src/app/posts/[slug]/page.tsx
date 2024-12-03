import bookmarkPlugin from "@notion-render/bookmark-plugin";

import { NotionRenderer } from "@notion-render/client";

import hljsPlugin from "@notion-render/hljs-plugin";
import { type Metadata } from "next";
import Link from "next/link";

import { notFound } from "next/navigation";
import { fetchPageBlocks, fetchPageBySlug, notion } from "~/lib/notion";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const id = (await props?.params)?.slug ?? "";

  const post = await fetchPageBySlug(id);
  const name = post?.properties?.Name?.title[0]?.text?.content ?? "";

  return {
    title: name ?? "Francisco Veiras",
    description: "",
    authors: [{ name: "Francisco Veiras" }],
    openGraph: {
      title: `${name} | Francisco Veiras`,
      description: "",
      type: "website",
      url: `/posts/${id}`,
      images: [
        {
          url: `/api/og?title=${name}&username=${"Francisco Veiras"}`,
          width: 1200,
          height: 630,
          alt: `${name} | Francisco Veiras`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | Francisco Veiras`,
      description: "",
      images: [`/api/og?title=${name}&username=${"Francisco Veiras"}`],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetchPageBySlug(params.slug);

  if (!post) notFound();

  const blocks = await fetchPageBlocks(post.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  await renderer.use(hljsPlugin({}));
  await renderer.use(bookmarkPlugin(undefined));

  const html = await renderer.render(...blocks);
  const date = new Date(post.properties.Updated.last_edited_time);
  const formattedDate = date.toDateString();

  return (
    <div className="m-auto my-14 flex w-full flex-col 2xl:w-1/2">
      <Link href={"/posts"}>
        <p className="text-sm transition-all hover:!text-gray-200">
          ⟵ Back to posts
        </p>
      </Link>
      <h1 className="mt-8 text-3xl font-semibold">
        {post?.properties?.Name?.title[0]?.text?.content ?? ""}
      </h1>
      <p>
        {formattedDate} · {post?.properties?.Tags.multi_select[0]?.name}
      </p>
      <div
        className="notion-editor"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
