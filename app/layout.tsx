import "./globals.css";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const signatureFont = Cormorant_Garamond ({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

export const metadata = {
  title: "Fernando S. Santos | Portfólio",
  description:
    "Profissional de tecnologia com foco em análise e soluções orientadas a dados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
