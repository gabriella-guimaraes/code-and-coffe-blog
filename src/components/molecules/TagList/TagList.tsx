//Components
import Box from "@/components/atoms/Box/Box";
import Tag from "@/components/atoms/Tag/Tag";

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
    return(
        <Box
            tag="div"
            styleSheet={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                flexDirection: "row",
            }}>

            {tags.map((tag) => (
                <Tag key={tag} label={tag} />
            ))}

        </Box>
    )
}