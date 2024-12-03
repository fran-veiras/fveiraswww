import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 flex w-full flex-row items-center justify-between border-b border-grey-border bg-grey-subtle px-4 py-2">
      <Link
        href="/"
        className="flex cursor-pointer flex-row items-center gap-2"
      >
        <Image
          alt="me"
          src="/me.jpg"
          width={32}
          className="max-h-8 min-w-8 rounded-full border border-grey-border"
          height={32}
        />
        <p className="hidden text-sm lg:block">Francisco Veiras</p>
      </Link>
      <div className="flex flex-row items-center gap-4">
        <Link
          target="_blank"
          href="https://github.com/fveiraswww"
          className="cursor-pointer text-sm decoration-grey-lab/60 transition-all hover:underline hover:decoration-grey-lab"
        >
          GitHub
        </Link>
        <Link
          target="_blank"
          href="https://x.com/fveiras_"
          className="cursor-pointer text-sm decoration-grey-lab/60 transition-all hover:underline hover:decoration-grey-lab"
        >
          Twitter (x)
        </Link>
        <Link
          href="mailto:franciscover99@gmail.com"
          className="cursor-pointer text-sm decoration-grey-lab/60 transition-all hover:underline hover:decoration-grey-lab"
        >
          Email
        </Link>
        <Link
          target="_blank"
          href="https://www.youtube.com/@fveiras"
          className="cursor-pointer text-sm decoration-grey-lab/60 transition-all hover:underline hover:decoration-grey-lab"
        >
          YouTube
        </Link>
      </div>
    </nav>
  );
};
