import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css"

export const metadata: Metadata = {
  title: "броненосец",
  description: "We bring your car’s performance and appearance to life, one modification at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="w-100wv flex justify-center max-w-[2000px]">
          {children}
        </div>
      </body>
    </html>
  );
}
