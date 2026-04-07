import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { SubHeading } from "@/components/sub-heading";
import { TimeLine } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative h-full min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About me</Heading>
        <SubHeading>
          I am a passionate web developer with a love for creating beautiful and
          functional websites. With a strong foundation in HTML, CSS, and
          JavaScript, I enjoy building responsive and user-friendly web
          applications. In my free time, I enjoy exploring new coding challenges
          and experimenting with different programming languages.
        </SubHeading>
        <SectionHeading className="text-secondary max-w-lg px-4 pt-4 text-sm md:text-sm">
          I love to travel and explore new places. I have been to 5 countries
          and visited 10 cities.
        </SectionHeading>
        <Collage />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here is a timeline of my life achievements:
        </p>
        <TimeLine />
      </Container>
    </div>
  );
}
