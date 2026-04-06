import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
    title: string;
    description: string;
    date: string;
    image: string
}

export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), "src/data", `${slug}.mdx`),
            "utf-8",
        );

        if (!singleBlog) return null

        // Optionally provide a type for your frontmatter object
        const { content, frontmatter } = await compileMDX<FrontMatter>({
            source: singleBlog,
            options: { parseFrontmatter: true },
        });

        return { content, frontmatter };
    } catch (e) {
        return null
    }
};


export const getBlogs = async () => {
    try {
        const files = await fs.readdir(path.join(process.cwd(), "src/data"));
        const allBlogs = await Promise.all(
            files.map(async (file) => {
                const slug = file.replace(".mdx", "");
                const frontmatter = await getBlogFrontMatterBySlug(slug);
                return { slug, frontmatter };
            })
        )

        return allBlogs
    } catch (e) {
        return null
    }
}

const getBlogFrontMatterBySlug = async (slug: string) => {
    const singleBlog = await fs.readFile(
        path.join(process.cwd(), "src/data", `${slug}.mdx`),
        "utf-8",
    );
    if (!singleBlog) return null
    const { frontmatter } = await compileMDX<FrontMatter>({
        source: singleBlog,
        options: { parseFrontmatter: true },
    });

    return frontmatter;
} 