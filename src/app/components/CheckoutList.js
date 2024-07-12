"use client";

import { useCart } from "@/app/components/cart-provider";
import Image from "next/image";
import Link from "next/link";

const CheckoutList = () => {
  const { cart, setCart } = useCart();

  return (
    <ul className="flex flex-col gap-4">
      {cart.map((product) => {
        return (
          <div>
             <li className="flex gap-4 items-center">
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.title}
              className="h-36 max-h-36 object-contain"
            />
            <Link href={`/products/${product.product}`}>
              {product.title}
              <span>({product.qt})</span>
            </Link>
           
          </li>
             <div className="flex justify-center mb-4">
              <svg
                width="126"
                height="10"
                viewBox="0 0 126 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.2491 9.30678L67.7987 4.75718H125.651V4.55039H67.7987L63.2491 0.0524902L58.7512 4.55039H0.692139V4.75718H58.7512L63.2491 9.30678ZM63.2491 0.36269L67.5919 4.65378L63.2491 8.99658L58.9063 4.65378L63.2491 0.36269Z"
                  fill="#555555"
                />
              </svg>
            </div>
          </div>
         

        );
      })}
    </ul>
  );
};

export default CheckoutList;
