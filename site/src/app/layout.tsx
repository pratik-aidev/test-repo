import type { Metadata } from "next";
import { SiteShell, JsonLd } from "@/components/marketing";
import { site, organizationSchema, websiteSchema } from "./_content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
