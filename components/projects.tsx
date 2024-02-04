"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects(props: any) {
  const { ref } = useSectionInView(props.refer, 0.5);

  return (
    <section ref={ref} id={props.link} className="scroll-mt-28 mb-28">
      <SectionHeading>{props.title}</SectionHeading>
      <div>
        {props.projectsData.map((project:any, index: any) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
