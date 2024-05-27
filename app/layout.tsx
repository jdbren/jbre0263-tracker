import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AddButton from "../components/AddButton.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Tracking App",
  description: "A simple app to track movies you've watched."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          <h1 className="text-3xl font-bold">Movie Tracker</h1>
          <AddButton />
        </header>
        {children}
      </body>
    </html>
  );
}
