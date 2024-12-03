"use client";
import Image from "next/image";
import React from "react";
import { Divider } from "./divider";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-8">
      <Image
        alt="me"
        src="/me.jpg"
        width={120}
        className="rounded-full"
        height={120}
      />
      <motion.h1
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        Francisco Veiras
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        Developer. Creator of experiences and web interfaces. Nerd. Passionate
        about software. Constantly learning. Currently working as web developer
        at Üma Health AI, using technologies like JavaScript, TypeScript,
        Styled-Components, ReactJs, NextJs, Single-Spa, TailwindCss, React
        Testing Library, NodeJs, Express and more.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <Divider color="#B7B7B7" />
      </motion.div>
    </div>
  );
};
