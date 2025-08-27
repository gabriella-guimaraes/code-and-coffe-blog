import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalStyle from "@/theme/GlobalStyle";
import Menu from "@/components/organisms/Menu/Menu";
import Footer from "@/components/organisms/Footer/Footer";
import ThemeProvider from "@/theme/ThemeProvider";


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
