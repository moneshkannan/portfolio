"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! 👋{" "} I'm a passionate
        <span className="font-medium">full-stack developer</span> with a knack for crafting smooth and user-friendly applications.{" "}
        <span className="italic"> My toolkit includes the likes</span>{" "}
        <span className="font-medium">
        React, Next.js, Node.js, Ruby, and Ruby on Rails, Mongo DB, MySql
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not immersed in the world of coding,</span>, you'll likely find me on the badminton court or cricket field, unleashing my competitive spirit.{" "}But hey, it's not all about the tech and sports—I also love{" "}
        <span className="font-medium"> love strumming away on my guitar</span>. creating melodies that resonate with my soul.{" "}
      </p>
      <p>
        <span className="font-medium">join me on this journey where{" "}</span>
        <span className="font-medium">technology meets creativity,</span> and let's build something incredible together! 🚀
      </p>
    </motion.section>
  );
}
