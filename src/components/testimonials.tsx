import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const Testimonials = () => {
  const data = [
    {
      quote:
        "Venkatesh is so great to work with! He is a talented developer and a great communicator. He always goes above and beyond to ensure that the project is a success.",
      name: "Elon Musk",
      avatar:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      quote:
        "Working with Venkatesh was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver the project on time and exceed expectations.",
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      quote:
        "Venkatesh brings a fresh perspective and deep technical knowledge to every project. Highly recommend for anyone looking for a reliable developer.",
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    },
    {
      quote:
        "The level of professionalism and expertise Venkatesh demonstrated was outstanding. He was responsive, proactive, and delivered exceptional results.",
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8",
    },
    {
      quote:
        "I was impressed with Venkatesh's technical skills and his ability to explain complex concepts clearly. He's a true professional.",
      name: "David Kumar",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHx8",
    },
  ];
  return (
    <div className="py-4 my-4 px-4 shadow-section">
      <SectionHeading className="pb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex mask-x-from-80% py-4">
        <Marquee speed={20} pauseOnHover>
          {data.map((testimonial, index) => (
            <TestimonialCard key={`testimonial-${index}`} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-aceternity mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl border p-4 transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
