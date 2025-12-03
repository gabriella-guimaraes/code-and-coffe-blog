//Components
import HomeTemplate from "@/components/templates/Home/Home";
import postService from "@/services/posts/postService";
import templatePageHOC, { createGenerateMetadata } from "@/services/templates/templatePageHOC";
import { withTemplateConfig } from "@/services/templates/withTemplateConfig";

const pageTitle = "Home";
const WrappedHome = templatePageHOC(HomeTemplate, { title: pageTitle });

// Re-exporta a função gerada pelo HOC — o Next vai usar essa função para montar o <head>.
export const generateMetadata = createGenerateMetadata(pageTitle);

const posts = await postService().getAllPosts();

export default async function Home() {
  const { templateConfig } = await withTemplateConfig({posts});
  return <WrappedHome templateConfig={templateConfig} />;
}