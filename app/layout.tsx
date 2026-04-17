import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HNPVN - Giải pháp Nhân sự",
  description: "Trang bị sức mạnh cho đội ngũ của bạn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      {/* Sử dụng trực tiếp roboto.className để ép Tailwind v4 nhận diện Font mà không qua CSS variables */}
      <body className={`${roboto.className} min-h-screen antialiased flex flex-col bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
