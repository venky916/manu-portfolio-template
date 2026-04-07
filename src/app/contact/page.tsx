import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/sub-heading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-16 md:pb-10">
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
