import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/context/Provider";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Thiago Silva Andrade - Portifolio",
  description: "Portifolio de Thiago Silva Andrade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true" 
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-black dark:text-white bg-[#072E33]`}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
