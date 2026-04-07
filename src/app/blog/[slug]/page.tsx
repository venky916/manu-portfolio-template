import { Container } from "@/components/container";
import { Metadata } from "next";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { Scales } from "@/components/scales";

// export const metadata: Metadata = {
//   title: "All blogs - Venkatesh",
//   description: "All my general wisdom",
// };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog?.frontmatter?.title,
    description: blog?.frontmatter?.description,
  };
}

interface SingleBlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) redirect("/blog");

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative h-full min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <img
          src={blog?.frontmatter?.image}
          alt={blog?.frontmatter?.title}
          className="mb-20 max-h-96 max-w-2xl mx-auto w-full border border-neutral-200 rounded-2xl shadow-xl object-cover"
        />
        {blog.content}
      </Container>
    </div>
  );
}
