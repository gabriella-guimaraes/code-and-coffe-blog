// libs
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface Post {
  metadata: {
    date: string;
    url: string;
    excerpt: string;
    tags: string[];
  };
  slug: string;
  title: string;
  content: string;
  image?: string;
}

export default function postService() {
  return {
    async getAllPosts(): Promise<Post[]> {
      const PATH_POSTS = path.resolve(".", "_data", "posts");
      const postFiles = await fs.readdir(PATH_POSTS, { encoding: "utf-8" });

      const postsPromise = postFiles.map(async (postFileName) => {
        const filePath = path.join(PATH_POSTS, postFileName);
        const postFile = await fs.readFile(filePath, { encoding: "utf-8" });

        const { data, content } = matter(postFile);

        const post: Post = {
            metadata: {
                date: new Date(data.date).toISOString(),
                url: data.url || "",
                excerpt: data.excerpt,
                tags: data.tags || [],
            },
            content: content,
            title: data.title,
            slug: postFileName.replace(/\.mdx?$/, ""),
            image: data.image || "",
        }

        return post;
      });

      const posts = await Promise.all(postsPromise);

      posts.sort((a, b) => {
        const ta = a.metadata?.date ? new Date(a.metadata.date).getTime() : 0;
        const tb = b.metadata?.date ? new Date(b.metadata.date).getTime() : 0;
        return tb - ta;
      });

      console.log("Post collection:", posts);
      return posts;
    },
  };
}
