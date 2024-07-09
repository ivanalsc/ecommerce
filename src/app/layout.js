
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";


import {CartProvider} from "./components/cart-provider"

const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({   weight: '400',
  subsets: ['latin'],});
 



export const metadata = {
  title: "J.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>

      <body className={bebas.className}>{children}</body>

      </CartProvider>
    </html>
  );
}
