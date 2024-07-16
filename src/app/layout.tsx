import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContext } from "@/context/AuthContext";
import { RecoilRootProvider } from "@/context/RecoilContext";
import Auth from "@/context/Auth";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MiniMerge",
  description: "Generate your Minimized Links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <RecoilRootProvider>
            <Auth />
            {children}
          </RecoilRootProvider>
        </AuthContext>
        <Toaster />
      </body>
    </html>
  );
}
