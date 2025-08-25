"use client";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apolloClient";
import Metadata from "@/components/metadata";

const geistSans = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-inter",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <ApolloProvider client={client}>
          <Metadata seoTitle="architecture" seoDescription="architecture" />
          <main>{children}</main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
