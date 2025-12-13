import { css } from "styled-components";
import theme from "@/theme/theme";
import { TypographyToken } from '@/theme/defaults/typography';

const applyTypography = (token: TypographyToken) => css`
  font-family: ${token.fontFamily ?? theme.typography.fontFamily};

  font-weight: ${token.fontWeight?.xs};
  font-size: ${token.fontSize?.xs};
  line-height: ${token.lineHeight?.xs};

  @media (min-width: 768px) {
    ${token.fontWeight?.md &&
    css`
      font-weight: ${token.fontWeight.md};
    `}

    ${token.fontSize?.md &&
    css`
      font-size: ${token.fontSize.md};
    `}

    ${token.lineHeight?.md &&
    css`
      line-height: ${token.lineHeight.md};
    `}
  }
`;

export const PostMarkdownStyles = css`
  h1 {
    ${applyTypography(theme.typography.variants.heading1)}
  }

  h2 {
    ${applyTypography(theme.typography.variants.heading2)}
  }

  h3 {
    ${applyTypography(theme.typography.variants.heading3)}
  }

  p {
    ${applyTypography(theme.typography.variants.body1)}
  }

  strong {
    font-weight: 700;
  }

  ul {
    padding-left: 1.5rem;
  }
`;