// Componentes
import Box from "@/components/atoms/Box/Box";
import Link from "@/components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";

// Styles
import theme from "@/theme/theme";
import TagList from "../TagList/TagList";
import ButtonBase from "@/components/atoms/Button/ButtonBase";
import Image from "@/components/atoms/Image/Image";

interface FeedPostProps {
  title: string;
  excerpt: string;
  url?: string;
  date: string;
  tags: string[];
  image?: string;
  slug: string;
}

export default function FeedPost({
  title,
  excerpt,
  url,
  date,
  tags,
  image,
  slug,
}: FeedPostProps) {
  const postDate = new Date(date)
    .toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .replace(".", "")
    .replace(/de /g, "");
  
  return (
    <Box
      tag="div"
      styleSheet={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        paddingBottom: "32px",
        borderBottom: `1px solid ${theme.colors.neutral.x700}`,
        marginBottom: "32px",
        width: "100%",
      }}
    >
      {/* Data */}
      <Text
        variant="body3"
        styleSheet={{
          color: theme.colors.neutral.x300,
        }}
      >
        {postDate}
      </Text>

      {/* Título */}
      <Link
          href={slug}
          styleSheet={{
            textDecoration: "none",
            color: theme.colors.neutral.x000,
          }}
          variant="heading3"
        >
          {title}
      </Link>
      {/* {url ? (
        <Link
          href={url}
          styleSheet={{
            textDecoration: "none",
            color: theme.colors.neutral.x000,
          }}
          variant="heading3"
        >
          {title}
        </Link>
      ) : (
        <Text
          variant="heading3"
          styleSheet={{
            color: theme.colors.neutral.x000,
          }}
        >
          {title}
        </Text>
      )} */}

      {/* Descrição */}
      <Text
        variant="body2"
        styleSheet={{
          color: theme.colors.neutral.x200,
          maxWidth: "80%",
        }}
      >
        {excerpt}
      </Text>

      {/* Tags */}
      <TagList tags={tags} />

      {/* Placeholder da imagem */}
      {/* <Box
        tag="div"
        styleSheet={{
          width: "100%",
          height: "260px",
          borderRadius: "12px",
          backgroundColor: theme.colors.neutral.x800,
        }}
      /> */}
      {image && (
        <ButtonBase
          href={slug || "#"}
          styleSheet={{
            hover: {
              opacity: 0.8
            }
          }}
        >
          <Image
            src={image}
            alt="Post Image Description"
            styleSheet={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
              marginTop: "24px",
            }}
          />
        </ButtonBase>
      )}
    </Box>
  );
}
