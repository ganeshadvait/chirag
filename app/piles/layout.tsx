import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piles Treatment in Bangalore | Laser Piles Surgery | Chirag Hospitals",
  description:
    "Get advanced laser treatment for piles in Bangalore at Chirag Hospitals. Experienced specialists, minimal pain procedure, fast recovery, EMI options available.",
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

