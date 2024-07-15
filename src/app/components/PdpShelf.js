import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from "next/image";
  import Link from "next/link";
import "../../app/globals.css";


  


const PdpShelf = async({id}) => {
  const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
const products = await response.json();

  return (
    <Carousel className="w-full bg-white p-8">
        <h2 className="text-3xl mb-4">YOU MAY ALSO LIKE</h2>

    <CarouselContent>
      {products.map((product) => (
        
        <CarouselItem key={product.id} className={product.id === parseInt(id) ? "md:basis-1/4 filter" : "md:basis-1/4 no-filter"}>
          
          <div className="p-1">
          <Card className="border">
              <CardContent className="flex flex-col aspect-square rounded-0 bg-white">
                <Link href={`/products/${product.id}`}>
                <div className="bg-white w-full pt-8 min-h-48 flex align-center">
                <Image src={product.image} width={200} height={200} className="max-h-28 object-contain duration-300 hover:scale-110"/>

                </div>
                <div className="flex justify-center mb-4">
                <svg width="126" height="10" viewBox="0 0 126 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.2491 9.30678L67.7987 4.75718H125.651V4.55039H67.7987L63.2491 0.0524902L58.7512 4.55039H0.692139V4.75718H58.7512L63.2491 9.30678ZM63.2491 0.36269L67.5919 4.65378L63.2491 8.99658L58.9063 4.65378L63.2491 0.36269Z" fill="#555555"/>
</svg>

                </div>
                <span className="">BRAND</span>
                <span className="line-clamp-2 min-h-12 mb-4 text-slate-800">{product.title}</span>
                <span className="">$ {product.price}</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  
  </Carousel>
  )
}

export default PdpShelf