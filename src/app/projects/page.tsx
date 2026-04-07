import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/sub-heading";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-16 md:pb-10">
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
