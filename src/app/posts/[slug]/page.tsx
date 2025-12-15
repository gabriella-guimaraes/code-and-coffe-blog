import { notFound } from "next/navigation";

//Services
import postService from "@/services/posts/postService";
import templatePageHOC, { createGenerateMetadata } from "@/services/templates/templatePageHOC";
import { withTemplateConfig } from "@/services/templates/withTemplateConfig";

//Components
import SinglePost from "@/components/templates/SinglePost/SinglePost";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage(props: PostPageProps) {
    const { slug } = await props.params;

    const post = await postService().getPostBySlug(slug);

    if(!post) return notFound();

    const pageTitle = post.title;

    const WrappedSinglePost = templatePageHOC(SinglePost, { title: pageTitle });
    const generateMetadata = createGenerateMetadata(pageTitle);
    const { templateConfig } = await withTemplateConfig({ posts: [post] });

    return <WrappedSinglePost templateConfig={templateConfig} />;
};

//TODO: Implementar a renderização do post completo
// - Criar o Template do Post com os dados do post
// - Usar o templatePageHOC para envolver o Template do Post
// - Gerar o metadata dinâmico para o post