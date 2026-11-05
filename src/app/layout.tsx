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
  title: "Fortiter Nova | Right-Sized ASO for Small Studios",
  description:
    "Fortiter Nova is an app store optimization agency for small game studios: right-sized packages, honest testing, and plain-language reporting.",
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
