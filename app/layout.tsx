import Nav from "~/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const moki = localFont({
  src: "../fonts/Moki-Mono.otf",
  variable: "--font-moki",
});

export const metadata = {
  title: "McLaren Automotive",
  description: "Prepare, Commit, Belong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${moki.variable} font-sans`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
