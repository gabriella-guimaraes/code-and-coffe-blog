//Components
import { BaseComponent } from "@/theme/BaseComponent";
import * as icons from "./svgs/index";

//Styles
import { StyleSheet } from "@/theme/StyleSheet";

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: IconSize;
}

const iconSizes = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "36px",
} as const;

type IconSize = keyof typeof iconSizes;

export default function Icon({ name, size = "md", styleSheet, ...props }: IconProps) {
  const CurrentIcon = icons[name as keyof typeof icons] || icons["DefaultIcon"];
  const sizeValue = iconSizes[size];

  if (!CurrentIcon) return <>${name} is not a valid Icon</>;
  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: sizeValue,
        height: sizeValue,
        fill: "currentColor",
        color: "inherit",
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CurrentIcon />
    </BaseComponent>
  );
}

Icon.defaultProps = {
  name: "default_icon",
  size: "md",
};
