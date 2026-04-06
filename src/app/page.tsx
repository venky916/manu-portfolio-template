import { Container } from "@/components/container";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-16 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Tyler Durden
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I am Venkatesh software developer from India.{" "}
        </p>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
