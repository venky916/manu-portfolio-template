import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-16 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I am a passionate web developer with a love for creating beautiful and
          functional websites. With a strong foundation in HTML, CSS, and
          JavaScript, I enjoy building responsive and user-friendly web
          applications. In my free time, I enjoy exploring new coding challenges
          and experimenting with different programming languages.
        </p>
      </Container>
    </div>
  );
}
