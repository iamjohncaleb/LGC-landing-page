import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeInitScript } from "@/components/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Legendary Consults | Digital Agency",
  description: "Websites, apps, Web3 products and digital systems for ambitious brands."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeInitScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
