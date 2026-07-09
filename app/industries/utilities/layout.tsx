import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utilities Solutions | JaaSify — Engineering Studio",
  description:
    "Smart, sustainable, and profitable energy management. Modern utility technology for smarter infrastructure and sustainable growth.",
  openGraph: {
    title: "Utilities Solutions | JaaSify",
    description:
      "Empower your utility operations with cutting-edge energy management technology.",
  },
};

export default function UtilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
