import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality Solutions | JaaSify — Engineering Studio",
  description:
    "Connect your PMS, POS, guest apps, and analytics into one unified platform. Hospitality technology seamlessly integrated by JaaSify.",
  openGraph: {
    title: "Hospitality Solutions | JaaSify",
    description:
      "Deliver exceptional guest experiences with integrated hospitality technology.",
  },
};

export default function HospitalityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
