import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/header";
import Loading from "./loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lumos Cafe",
  description: "Lumos, Coffee, brunch, North Sydney, Sydney",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflow: "hidden" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
