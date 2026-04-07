import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SubHeading } from "@/components/sub-heading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
// import Link from "next/link";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - Venkatesh",
  description: "All my general wisdom",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  if (!allBlogs) return null;
  const truncate = (str: string, length: number) => {
    if (!str) return "";
    return str.length > length ? `${str.slice(0, length)}...` : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative h-full min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>All blogs</Heading>
        <SubHeading>I am Venkatesh software developer from India. </SubHeading>
        <div className="flex flex-col px-4">
          {allBlogs?.map((blog, idx) => (
            <Link
              className="no-underline"
              href={`/blog/${blog.slug}`}
              key={idx}
            >
              <div className="flex items-center justify-between">
                <p className="text-primary text-lg font-bold tracking-tight">
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
      </Container>
    </div>
  );
}
