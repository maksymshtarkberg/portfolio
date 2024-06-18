import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import AppProvider from "./contextProvider";
import Favicon from "./favicon.ico";
import AppleFavicon from "./apple-touch-icon.png";
import MidFavicon from "./favicon-32x32.png";
import SmFavicon from "./favicon-16x16.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maksym Shtarkberg - Web Developer Portfolio",
  description: `I've been working on Web development for 3 years straight. Get in touch with me to know more.`,
  icons: [
    { rel: "icon", url: Favicon.src },
    { rel: "icon", url: MidFavicon.src, sizes: "32x32" },
    { rel: "icon", url: SmFavicon.src, sizes: "16x16" },
    {
      rel: "apple-touch-icon",
      url: AppleFavicon.src,
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
