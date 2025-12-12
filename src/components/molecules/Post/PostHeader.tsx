// Components
import Box from "@/components/atoms/Box/Box";
import Text from "@/components/atoms/Text/Text";
import TagList from "../TagList/TagList";
import ButtonBase from "@/components/atoms/Button/ButtonBase";
import Image from "@/components/atoms/Image/Image";

// Styles
import theme from "@/theme/theme";
import { formatDate } from "@/utils/formatDate";

interface PostHeaderProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image?: string;
}

export default function PostHeader({
  title,
  excerpt,
  date,
  tags,
  image,
}: PostHeaderProps) {
  const postDate = formatDate(date);

  return (
    <Box
      tag="div"
      styleSheet={{
        width: "100%",
        minHeight: "70vh",
        padding: "5rem 0px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <Box
        tag="div"
        styleSheet={{
          width: "100%",
          maxWidth: "100vw",
          padding: { xs: "0px 24px", md: "0px 120px" },
          display: "column",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <Text variant="display1">{title}</Text>

        <Text
          variant="body1"
          styleSheet={{
            color: theme.colors.neutral.x100,
            width: { xs: "100%", md: "80%" },
          }}
        >
          {excerpt}
        </Text>

        <Text
          variant="body2"
          styleSheet={{
            color: theme.colors.neutral.x200,
            width: { xs: "100%", md: "80%" },
          }}
        >
          {postDate}
        </Text>

        <TagList tags={tags} />

        {image && (
          <ButtonBase
            styleSheet={{
              hover: {
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={image}
              alt="Post Image Description"
              styleSheet={{
                width: "100vw",
                height: "auto",
                maxHeight: "70vh",
                borderRadius: "12px",
                objectFit: "cover",
                marginTop: "24px",
              }}
            />
          </ButtonBase>
        )}
      </Box>
    </Box>
  );
}
