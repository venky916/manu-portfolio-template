"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://assets.aceternity.com/macbook-scroll.webp",
      description:
        "A mockup of a Macbook that shows off the latest features and technologies",
      href: "#",
    },
    {
      title: "Instant Feedback",
      src: "https://assets.aceternity.com/animated-testimonials.webp",
      description:
        "An interactive feedback system that provides instant response to users actions",
      href: "#",
    },
    {
      title: "Apple Clone",
      src: "https://assets.aceternity.com/apple-cards-carousel.webp",
      description:
        "A clone of Apples's website that show cases their products and services",
      href: "#",
    },
    {
      title: "Flight Simulator",
      src: "https://assets.aceternity.com/background-lines.webp",
      description:
        "A flight simulator that allows you to experience the thrill of flying",
      href: "#",
    },
  ];
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that cna impact millions of lives.
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group relative mb-4 h-72"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={300}
                className="h-60 w-full rounded-xl object-cover transition duration-200 group-hover:scale-105"
              />
              <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
