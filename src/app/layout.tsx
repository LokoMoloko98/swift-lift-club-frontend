import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ConfigureAmplifyClientSide from "./amplify-cognito-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift Lift Club Portal",
  description: "Portal for Swift Lift Club members",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <>
          <ConfigureAmplifyClientSide />
          {children}
        </>
      </body>
    </html>
  );
}