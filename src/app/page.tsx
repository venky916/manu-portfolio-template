import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";
import { Testimonials } from "@/components/testimonials";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative h-full min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Tyler Durden</Heading>
        <SubHeading>
          I am a passionate web developer with a love for creating beautiful and
          functional websites. With a strong foundation in HTML, CSS, and
          JavaScript, I enjoy building responsive and user-friendly web
          applications. In my free time, I enjoy exploring new coding
          challenges.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
