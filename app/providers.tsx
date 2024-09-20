"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Toaster } from "react-hot-toast";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <NextTopLoader />
      <Toaster />
    </>
  );
};
