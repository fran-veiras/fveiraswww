import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 flex w-full flex-row items-center justify-between border-b border-grey-border bg-grey-subtle p-2">
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
      <div className="flex flex-row items-center gap-2">
        <p className="text-sm">GitHub</p>
        <p className="text-sm">Twitter (x)</p>
        <p className="text-sm">Email</p>
      </div>
    </nav>
  );
};
