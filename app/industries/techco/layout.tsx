import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechCo Solutions | JaaSify — Engineering Studio",
  description:
    "Built for tech companies, by tech people. Infrastructure, scale, security, and delivery for growing technology companies.",
  openGraph: {
    title: "TechCo Solutions | JaaSify",
    description:
      "Engineering expertise for tech companies — infrastructure, scale, security, and delivery.",
  },
};

export default function TechCoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
