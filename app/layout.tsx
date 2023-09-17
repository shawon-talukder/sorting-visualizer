import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description: "Sorting visualizer project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-900 text-neutral-200 h-[100vh] lg:overflow-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
