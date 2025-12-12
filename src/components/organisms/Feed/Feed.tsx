/* eslint-disable react/display-name */

//Components
import Box from "@/components/atoms/Box/Box";
import Text from "@/components/atoms/Text/Text";
import FeedPost from "@/components/molecules/Post/Post";
import type { Post } from "@/services/posts/postService";

//Styles
import theme from "@/theme/theme";

//React
import React from "react";

interface FeedProps {
  children?: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box
      tag="div"
      styleSheet={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        tag="div"
        styleSheet={{
          backgroundColor: theme.colors.neutral.x999,
          color: theme.colors.neutral.x000,
          width: { xs: "100%", md: "60%" },
          minHeight: "70vh",
          borderRadius: "24px",
          padding: "24px",
        }}
      >
        <Box
          tag="div"
          styleSheet={{
            width: "100%",
            gap: "24px",
          }}>
          <Text variant="heading1" styleSheet={{ marginBottom: "16px" }}>
            Últimas postagens
          </Text>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

interface FeedPostsProps {
  posts?: Post[];
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
  return (
    <Box tag="div" styleSheet={{width: "100%"}}>
      {posts?.map((post) => (
        <Box key={post.slug} tag="div" styleSheet={{ marginBottom: "12px", width: "100%" }}>
          <FeedPost
            title={post.title}
            excerpt={post.metadata.excerpt}
            url={post.metadata.url}
            date={post.metadata.date}
            tags={post.metadata.tags}
            image={post.image}
            slug={`/posts/${post.slug}`}
          />
        </Box>
      ))}
    </Box>
  );
};
