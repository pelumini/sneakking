import { Footer } from "@/app/(storefront)/_components/Footer";
import { type ReactNode } from "react";
import { Navbar } from "./_components/Navbar";

const StoreFrontLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
};

export default StoreFrontLayout;
