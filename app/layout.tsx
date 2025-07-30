import React from "react";
import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";

export const metadata = {
  title: "NextLevel Fsood",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
