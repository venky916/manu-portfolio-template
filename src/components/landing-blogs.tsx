import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import React from "react";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  if (!allBlogs) return null;
  const truncate = (str: string, length: number) => {
    if (!str) return "";
    return str.length > length ? `${str.slice(0, length)}...` : str;
  };
  return (
    <div className="py-10 px-4">
      <SectionHeading className="pb-4" delay={0.4}>
        I love writing things down.
      </SectionHeading>

      <div className="flex flex-col gap-8">
        {allBlogs.slice(0, 3).map((blog, idx) => (
          <MotionDiv
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            key={idx}
          >
            <Link
              className="no-underline"
              href={`/blog/${blog.slug}`}
              key={idx}
            >
              <div className="flex items-center justify-between">
                <p className="text-primary text-base font-bold tracking-tight">
                  {blog?.frontmatter?.title}
                </p>
                <p className="text-secondary text-sm">
                  {new Date(blog?.frontmatter?.date ?? "").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    },
                  )}
                </p>
              </div>

              <p className="text-secondary max-w-lg text-sm">
                {truncate(blog?.frontmatter?.description ?? "", 120)}
              </p>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};
