import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative h-full min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <SubHeading>
          I am open to freelance opportunities. Reach out to me to inquire about
          my work.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
