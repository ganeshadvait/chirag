import type { Metadata } from "next";
// import Header from "@/components/header/header";
// import FooterComponent from "@/components/footer/footer";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
    "Chirag Global Hospitals offers 38 years of expert Colorectal care for piles, fistula, fissure, constipation and colon/rectal disorders. Advanced laser treatments, experienced surgeons and personalized care ensure effective & affordable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WFRRMC43');
        `}
      </Script>

      <body className={`${dmSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFRRMC43"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* <Header
          PhoneNumber={"08065916415"}
          mobilectatext={"Call Now"}
          mobileNumberHeader={"tel:08065916415"}
        /> */}
        {children}
      </body>
      {/* <FooterComponent
        footerdesc="About Chirag Global Hospitals"
        extradesc="Providing trusted care with decades of experience in diagnosing and treating colorectal and digestive health conditions."
        footernumber="08065916415"
      /> */}
    </html>
  );
}
