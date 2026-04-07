"use client";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

import { Container } from "./container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 py-3 px-6">
      <p className="text-xs text-neutral-500">Built with love by Venkatesh </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://twitter.com">
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://linkedin.com">
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://github.com">
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  );
};
