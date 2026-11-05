import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Fortiter Nova — Mobile App Store Testing",
  description:
    "Fortiter Nova helps app teams ship with confidence through rigorous mobile app store testing, device compatibility, performance, and security validation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col overflow-x-hidden font-sans">
        <StarField />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
