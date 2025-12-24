import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Girdharpur Family Farms",
  description:
    "A family farm near Narnaul—trusted staples, green vegetables, and seasonal fruits.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
