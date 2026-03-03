import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colorectal Cancer Treatment in Bangalore | Colorectal Cancer Surgery | Chirag Hospitals",
  description:
    "Get advanced colorectal cancer treatment in Bangalore at Chirag Hospitals. Experienced colorectal specialists, early detection, surgical and medical oncology, personalised patient care.",
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

