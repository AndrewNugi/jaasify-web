import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SACCO Solutions | JaaSify — Engineering Studio",
  description:
    "Transform your SACCO with cutting-edge technology that streamlines operations, enhances member engagement, and drives sustainable growth.",
  openGraph: {
    title: "SACCO Solutions | JaaSify",
    description:
      "Empower your SACCO with modern financial technology for member growth.",
  },
};

export default function SaccosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
