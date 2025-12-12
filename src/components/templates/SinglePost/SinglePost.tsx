//Services
import { TemplateConfig } from "@/services/templates/withTemplateConfig";

// Components
import Box from "@/components/atoms/Box/Box";

//Styles
import theme from "@/theme/theme";
import PostHeader from "@/components/molecules/Post/PostHeader";

type SinglePostProps = {
  templateConfig: TemplateConfig;
};

export default function SinglePost({ templateConfig }: SinglePostProps) {
  const post = templateConfig.posts?.[0];

  console.log(post);
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.neutral.x999,
        color: theme.colors.neutral.x000,
      }}
    >
      <PostHeader title={post?.title || ""} excerpt={post?.metadata.excerpt || ""} date={post?.metadata.date || ""} tags={post?.metadata.tags || []} image={post?.image || ""} />
    </Box>
  );
}
