import React, { ReactNode } from "react";
import { Navbar, Footer } from "@/components";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>WanderVista</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
