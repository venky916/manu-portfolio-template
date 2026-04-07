"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
  }[];
};

export const TimeLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20K MRR with vscode fork.",
          description:
            "Reached the revenue milestone of $20k MRR with the vscode fork.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Launched vscode fork.",
          description: "Successfully launched the vscode fork project.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Started development.",
          description: "Began work on the vscode fork initiative.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Research phase.",
          description: "Completed market research and planning.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Project conception.",
          description: "Initial ideas and concept development.",
        },
      ],
    },
  ];
  return (
    <div ref={ref} className="py-10">
      {data.map((item, index) => (
        <div key={index}>
          <motion.h3
            className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
            initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
          >
            {item.title}
          </motion.h3>
          <div className="flex flex-col gap-4">
            {item.content.map((content, contentIndex) => (
              <div key={contentIndex} className="pl-4">
                <Step className="mb-2" isInView={isInView} contentIndex={index}>
                  <motion.h4
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * contentIndex,
                    }}
                    className="text-neutral-600"
                  >
                    {content.title}
                  </motion.h4>
                </Step>
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : -10,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 * contentIndex,
                  }}
                  className="pt-1 pl-6 text-sm text-neutral-400"
                >
                  {content.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  contentIndex,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  contentIndex: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * contentIndex,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 size-4 text-neutral-500" />
      {children}
    </motion.div>
  );
};
