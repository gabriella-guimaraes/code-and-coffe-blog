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
}

export default function postService() {
  return {
    async getAllPosts(): Promise<Post[]> {
      const PATH_POSTS = path.resolve(".", "_data", "posts");
      const postFiles = await fs.readdir(PATH_POSTS, { encoding: "utf-8" });

      console.log("Reading posts from:", PATH_POSTS);
      console.log("Found post files:", postFiles);

      const postsPromise = postFiles.map(async (postFileName) => {
        const filePath = path.join(PATH_POSTS, postFileName);
        const postFile = await fs.readFile(filePath, { encoding: "utf-8" });

        console.log(`Reading file: ${postFile}`);

        const { data, content } = matter(postFile);
        // console.log(data);
        // console.log(content);

        const post: Post = {
            metadata: {
                date: data.date,
                url: data.url,
                excerpt: data.excerpt,
                tags: data.tags || [],
            },
            content: content,
            title: data.title,
            slug: postFileName.replace(/\.mdx?$/, ""),
        }
        console.log("Parsed post:", post);
        return post;
      });
      const posts = await Promise.all(postsPromise);

      console.log("Post collection:", posts);
      return posts;
    },
  };
}
