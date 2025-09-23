//src/app/layout.js
import { Merriweather_Sans, Josefin_Sans } from "next/font/google";
import Header from "@/components/common/nav/Header";
import "./globals.css";

// Configure Merriweather Sans font
const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

// Configure Josefin Sans font
const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Ikeja - Central",
  description:
    "Official web portal for the Ikeja Local Government, Lagos Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweatherSans.variable} ${josefinSans.variable}`}>
          <Header />
        {children}
      </body>
    </html>
  );
}
