// "use client";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";

import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

import "./globals.css";

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col items-center">
              <div className="flex-1 w-full flex flex-col items-center">
                <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                  <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                    <div className="flex gap-5 items-center font-semibold">
                      <Link href={"/"}>Bookmark Manager</Link>
                      <ThemeSwitcher />
                    </div>
                    <HeaderAuth />
                  </div>
                </nav>
                <div className="flex flex-col max-w-5xl p-5 w-full">
                  {children}
                </div>
              </div>
            </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/components/ui/provider";

export function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
