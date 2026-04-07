import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative h-full min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <SubHeading>
          I am a passionate web developer with a love for creating beautiful and
          functional websites. With a strong foundation in HTML, CSS, and
          JavaScript, I enjoy building responsive and user-friendly web
          applications. In my free time, I enjoy exploring new coding challenges
          and experimenting with different programming languages.
        </SubHeading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
