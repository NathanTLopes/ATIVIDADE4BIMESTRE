import "./globals.css";
import Header from  "@/components/Header"
export const metadata = {
  title: "Clinica NTL",
  description: "Clinica Médica",
  charset: "UTF-8",
  author: "Nathan Teixeira Lopes",
  keywords: "HTML, CSS, JavaScript, React, Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          {children}
        </header>
      </body>
    </html>
  );
}
