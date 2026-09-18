import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fissure Treatment in Bangalore | Chirag Hospitals",
  description:
    "Get advanced laser treatment for fissure in Bangalore at Chirag Hospitals. Experienced specialists, minimal pain procedure, fast recovery, EMI options available.",
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

