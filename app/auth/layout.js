import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary-light text-[#3d3929]`}
      >
        <div className="container mx-auto">
        <Image
      src="/image/authLogo.png" // Ensure the path is correct
      width={300}
      height={500}
      alt="Auth Logo"
      priority={true} // Optional for faster loading
    />
          {children}
        </div>
      </body>
    </html>
  );
}
