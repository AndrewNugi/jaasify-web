import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Security Solutions | JaaSify — Engineering Studio",
  description:
    "Your security is our architecture. Security audits, managed SOC, threat intelligence, and zero-trust implementation from JaaSify.",
  openGraph: {
    title: "Cyber Security Solutions | JaaSify",
    description:
      "Design, build, and operate security programs that protect your critical assets.",
  },
};

export default function CyberSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
