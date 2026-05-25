import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Hassaleh",
  description: "Turn spare change into crypto with Hassaleh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
