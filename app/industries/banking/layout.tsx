import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking Solutions | JaaSify — Engineering Studio",
  description:
    "Secure, scalable digital banking solutions that enhance customer experience, streamline operations, and drive growth. Modernize your banking infrastructure with JaaSify.",
  openGraph: {
    title: "Banking Solutions | JaaSify",
    description:
      "Modernize your banking operations with secure, scalable digital solutions.",
  },
};

export default function BankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
