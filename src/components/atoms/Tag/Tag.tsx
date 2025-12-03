import theme from "@/theme/theme";
import Text from "../Text/Text";

interface TagProps {
  label: string;
};

export default function Tag({ label }: TagProps) {
    return(
        <Text
            styleSheet={{
                backgroundColor: theme.colors.primary.x400,
                color: theme.colors.neutral.x000,
                padding: "4px 10px",
                fontSize: "12px",
                borderRadius: "12px",
                display: "inline-block",
                cursor: "pointer",
            }}
    >
      {label}
    </Text>
    )
}