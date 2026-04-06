import { Container } from "@/components/container";
import { Metadata } from "next";
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

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
      <Container className="mx-auto min-h-[200vh] p-4 md:pt-16 md:pb-10">
        {blog.content}
      </Container>
    </div>
  );
}
