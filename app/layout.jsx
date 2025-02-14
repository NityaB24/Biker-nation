import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CartProvider from "@/components/CartProvider";
// import { Toaster } from "@/components/ui/toaster";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "VT",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>

          <CartProvider>
            <Header/>
            {children}
            <Toaster/>
            <Footer/>
          </CartProvider>
          {/* <Toaster /> */}

      </body>
    </html>
  );
}