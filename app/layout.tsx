import type { Metadata } from "next";
import Header from "@/components/header/header";
import FooterComponent from "@/components/footer/footer";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// ✅ Load fonts via next/font/local (optimized)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Chirag Global Hospitals – Best Colon & Colorectal Care for Piles, Fistula & Colon Cancer",
  description:
    "Chirag Global Hospitals offers 38 years of expert colorectal care for piles, fistula, fissure, constipation and colon/rectal disorders. Advanced laser treatments, experienced surgeons and personalized care ensure effective & affordable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header
        PhoneNumber={"07969084448"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:07969084448"}
      />
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
      <FooterComponent
        footerdesc="About Chirag Global Hospitals"
        extradesc="38 years of experience in diagnosing & treating piles, fistula, fissure, constipation and other colon/rectal disorders."
        footernumber="9380498256"
      />
    </html>
  );
}
