import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/animations/layout";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBeamsWithCollision } from "@/components/animations/background-beams-with-collision";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Template",
  description: "Created by Prathamesh Chougale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkProvider>
              <Layout>
                <BackgroundBeamsWithCollision>
                  {children}
                </BackgroundBeamsWithCollision>
              </Layout>
            </ClerkProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
