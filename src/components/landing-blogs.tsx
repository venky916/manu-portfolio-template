import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import React from "react";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  if (!allBlogs) return null;
  const truncate = (str: string, length: number) => {
    if (!str) return "";
    return str.length > length ? `${str.slice(0, length)}...` : str;
  };
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg py-4 text-sm md:text-sm">
        I love writing things down.
      </p>

      <div className="flex flex-col gap-4">
        {allBlogs?.map((blog, idx) => (
          <Link className="no-underline" href={`/blog/${blog.slug}`} key={idx}>
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
              {truncate(blog?.frontmatter?.description ?? "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
