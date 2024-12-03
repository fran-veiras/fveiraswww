import { fetchLatestPages, fetchLatestProjects } from "~/lib/notion";
import { Hero } from "~/components/hero";
import { Projects } from "~/components/projects";
import { Posts } from "~/components/posts/posts";

export default async function HomePage() {
  const posts = await fetchLatestPages();
  const projects = await fetchLatestProjects();

  return (
    <main className="mx-auto my-14 flex w-full flex-col gap-12 bg-gradient-to-b md:w-1/2 2xl:w-1/2">
      <Hero />
      <Projects projects={projects} />
      <Posts posts={posts} />
    </main>
  );
}
