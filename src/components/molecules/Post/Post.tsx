// Componentes
import Box from "@/components/atoms/Box/Box";
import Link from "@/components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";

// Styles
import theme from "@/theme/theme";

interface FeedPostProps {
  title: string;
  excerpt: string;
  url?: string;
  date: string;
  tags: string[];
}

export default function FeedPost({
  title,
  excerpt,
  url,
  date,
  tags,
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
      {url ? (
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
      )}

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

      {/* Futuro componente de tags */}
      {/* <TagsList tags={tags} /> */}

      {/* Placeholder da imagem */}
      <Box
        tag="div"
        styleSheet={{
          width: "100%",
          height: "260px",
          borderRadius: "12px",
          backgroundColor: theme.colors.neutral.x800,
        }}
      />
    </Box>
  );
}
