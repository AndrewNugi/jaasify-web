import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CookieConsent from "./components/cookie-consent";

const siteUrl = "https://jaasify.com";

export const metadata: Metadata = {
  title: {
    default: "JaaSify — Engineering Studio",
    template: "%s | JaaSify",
  },
  description:
    "An engineering practice building software infrastructure for the continent & beyond. We build software that refuses to be ignored.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JaaSify",
    title: "JaaSify — Engineering Studio",
    description:
      "An engineering practice building software infrastructure for the continent & beyond.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JaaSify — Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JaaSify — Engineering Studio",
    description:
      "An engineering practice building software infrastructure for the continent & beyond.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "JaaSify",
        url: siteUrl,
        logo: `${siteUrl}/images/Jaasify.png`,
        description:
          "An engineering practice building software infrastructure for the continent & beyond.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254-713-666-622",
          contactType: "sales",
          email: "info@jaasify.com",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "KE",
        },
        sameAs: [
          "https://www.linkedin.com/in/jaasify-technology-group-limited-131195376",
          "https://x.com/Jaasify",
        ],
      },
      {
        "@type": "WebSite",
        name: "JaaSify",
        url: siteUrl,
      },
    ],
  };

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
