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
    <CarouselContent>
      {products.map((product) => (
        
        <CarouselItem key={product.id} className={product.id === parseInt(id) ? "md:basis-1/4 filter" : "md:basis-1/4 no-filter"}>
          
          <div className="p-1">
          
            <Card className="border-none">
              <CardContent className="flex flex-col aspect-square rounded-0 bg-stone-100">
                <Link href={`/products/${product.id}`}>
                <div className="bg-white w-full p-6 mt-4 mb-4 min-h-48 flex align-center">
                <Image src={product.image} width={200} height={300} className="max-h-28 object-contain"/>

                </div>
                <span className="line-clamp-2 min-h-12 mb-4">{product.title}</span>
                <span className="">$ {product.price}</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}

export default PdpShelf