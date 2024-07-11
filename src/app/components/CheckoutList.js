"use client"

import { useCart } from "@/app/components/cart-provider";
import Image from "next/image";
import Link from "next/link";

const CheckoutList = () => {
  const { cart, setCart } = useCart();

  return (
    <ul className="flex flex-col gap-4">
        {cart.map( product => {
            return(
                <li className="flex gap-4 items-center">
                    <Image src={product.image} width={150} height={150} alt={product.title} className="h-36 max-h-36 object-contain"/>
                    <Link href={`/products/${product.product}`}>
                    {product.title}<span>({product.qt})</span>
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default CheckoutList