import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-white">
      <Suspense>
        <Header hasSearch />
      </Suspense>
      {children}
      {modal}
    </main>
  );
}
