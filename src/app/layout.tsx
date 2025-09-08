import type { Metadata } from "next";

// External fonts
import { Roboto, Space_Grotesk } from "next/font/google";

//Styles
import "./globals.css";
import GlobalStyle from "@/theme/GlobalStyle";
import ThemeProvider from "@/theme/ThemeProvider";

//Components
import Menu from "@/components/organisms/Menu/Menu";
import Footer from "@/components/organisms/Footer/Footer";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code & Coffee Blog",
  description: "A personal blog about a developer's journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;500&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeProvider>
        <GlobalStyle />
        <body className={`${roboto.variable} ${spaceGrotesk.variable}`}>
          <Menu />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
