import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { personalProjectsData, projectsData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects projectsData={personalProjectsData} link="work_projects" refer="Work Projects" title="My Working Projects"/>
        <Skills />
        <Experience />
        <Projects projectsData={projectsData} link="personal_projects" refer="Personal Projects" title="My Personal Projects"/>
        <Contact />
    </main>
  );
}
