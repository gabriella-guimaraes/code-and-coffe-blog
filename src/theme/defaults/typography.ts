export type ResponsiveValue<T> = {
  xs: T;
  md?: T;
};
export interface TypographyToken {
  fontFamily?: string;
  fontWeight?: ResponsiveValue<string>;
  fontSize?: ResponsiveValue<string>;
  lineHeight?: ResponsiveValue<string>;
  marginTop?: ResponsiveValue<string>;
  marginBottom?: ResponsiveValue<string>;
}

export const typography = {
  fontFamily: "'Roboto', sans-serif",
  variants: {
    display1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: {
        xs: '700',
      },
      fontSize: {
        xs: '48px',
        md: '96px',
      },
      // marginTop: { xs: '2rem' },
      marginBottom: { xs: '1.5rem' },
    },
    display2: {
      fontWeight: {
        xs: '300',
      },
      fontSize: {
        xs: '48px',
        md: '96px',
      },
      marginBottom: { xs: '1.5rem' },
    },
    heading1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: {
        xs: '700',
        md: '700',
      },
      fontSize: {
        xs: '36px',
        md: '48px',
      },
      marginTop: { xs: '2rem' },
      marginBottom: { xs: '2rem' },
    },
    heading2: {
    //   fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: {
        xs: '700',
        md: '700',
      },
      fontSize: {
        xs: '24px',
        md: '36px',
      },
      marginTop: { xs: '1.75rem' },
      marginBottom: { xs: '1.75rem' },
    },
    heading3: {
      fontWeight: {
        xs: '700',
        md: '700',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '20px',
        md: '30px',
      },
      marginTop: { xs: '0.5rem' },
      marginBottom: { xs: '0.5rem' },
    },
    heading4: {
      fontWeight: {
        xs: '700',
        md: '700',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '16px',
        md: '20px',
      },
    },
    heading5: {
      fontWeight: {
        xs: '700',
        md: '700',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '14px',
        md: '16px',
      },
    },
    body1: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '18px',
      },
      marginBottom: { xs: '1rem' },
    },
    body2: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '16px',
      },
      marginBottom: { xs: '0.75rem' }
    },
    body3: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '14px',
      },
      marginBottom: { xs: '0.5rem' }
    },
    body4: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '12px',
      },
      marginBottom: { xs: '0.25rem' }
    },
    body5: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.5',
        md: '1.5',
      },
      fontSize: {
        xs: '8px',
      },
    },
  } satisfies Record<string, TypographyToken>,
} as const;