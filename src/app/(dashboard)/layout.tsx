import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w[8%] lg:w-[16%] xl:w-[14%] py-4 px-3 ">
        <Link href="/" className="justify-items items-center flex gap-2 ">
          <Image src="/logo.png" width={32} height={40} alt="logo" />
          <span className="hidden lg:block">Caw School</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:[92%] lg:w-[84%] xl:w-[86%] bg-gray-100">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
