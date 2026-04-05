"use client";
import React, { useState } from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        animate={{
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
        }}
        transition={{
          duration: 0.25,
          ease: "linear",
        }}
        className={cn(
          "fixed inset-x-0 top-0 left-0 mx-auto flex max-w-4xl items-center justify-between px-3 py-2",
          scrolled && "rounded-full bg-white",
        )}
      >
        <Image
          src={"/itachi.webp"}
          width={100}
          height={100}
          alt="avatar"
          className="size-10 rounded-full"
        />
        <div className="flex items-center gap-2">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}

              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}
