import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Piles Treatment for Women in Bangalore | Laser Piles Surgery | Chirag Hospitals",
  description:
    "Schedule an appointment easily with our professional team. Choose a time that works for you and get expert service you can trust.",
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
