import localFont from "next/font/local";
import "./globals.css";
import MainHeader from "@/components/main-header";
import Head from 'next/head';

export const metadata = {
  title: "Ecommerce Site",
  description: "All in one products store",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="public\window.svg" />
      </Head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
