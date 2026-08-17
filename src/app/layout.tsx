import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/lib/ThemeProvider";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const cormorant = localFont({
  src: "./fonts/CormorantGaramond-Variable.woff2",
  variable: "--font-cormorant",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miruo Lin — Full-Stack Software Engineer",
  description:
    "Portfolio of Miruo Lin, a full-stack software engineer building thoughtful products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
