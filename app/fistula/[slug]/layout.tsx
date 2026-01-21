import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fistula Treatment in Bangalore | Laser Fistula Surgery | Chirag Hospitals",
  description:
    "Get advanced fistula treatment in Bangalore at Chirag Hospitals. Expert doctors, safe laser fistula surgery, minimal pain, and faster recovery. Book your consultation today.",
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
