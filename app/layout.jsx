import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import header from "@/components/header";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono ({subsets:
  ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-jetbrainsMono"

})

export const metadata = {
  title: "Massan.code",
  description: "Pronto para tudo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${jetbrainsMono.variable}  antialiased`} >
          <Header/>
          <StairTransition/>
          <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
