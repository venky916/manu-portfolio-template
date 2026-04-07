"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "max-w-lg pt-4 text-base font-normal md:text-sm ",
        className,
      )}
    >
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.3,
            delay: delay + idx * 0.1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          key={word + idx}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};
