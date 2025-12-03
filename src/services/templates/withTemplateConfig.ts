import readYamlFile from "read-yaml-file/index";
import path from "path";
import { Post } from "../posts/postService";

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  }
  personal?: {
    name?: string;
    avatar?: string;
    occupation?: string;
    location?: string;
    socialNetworks?: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
  }
  posts?: Post[];
}
export async function withTemplateConfig(props: { posts?: Post[] } = {}) {
  const PATH_TEMPLATE_CONFIG = path.resolve(".", "template-config.yml");
  const templateConfig = await readYamlFile<TemplateConfig>(PATH_TEMPLATE_CONFIG);

  const mergedTemplateConfig: TemplateConfig = {
    ...templateConfig,
    posts: props.posts ?? templateConfig.posts,
  };

  return {
    templateConfig: mergedTemplateConfig,
    ...props,
  }
}