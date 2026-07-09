import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Solutions | JaaSify — Engineering Studio",
  description:
    "End-to-end platforms for modern insurers. Intelligent automation, data-driven underwriting, and seamless claims management from JaaSify.",
  openGraph: {
    title: "Insurance Solutions | JaaSify",
    description:
      "Transform your insurance operations with intelligent automation and data-driven underwriting.",
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
