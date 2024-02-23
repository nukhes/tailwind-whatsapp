import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Whatsapp em Tailwind CSS",
  description: "Feito com NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body class="bg-slate-900 flex justify-center" className={inter.className}>{children}</body>
    </html>
  );
}
