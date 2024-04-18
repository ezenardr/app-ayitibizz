import GlobalLayout from '@/components/Core/GlobalLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function ProductDetail() {
  return (
    <GlobalLayout>
      <ProductImage />
      <div className="flex items-center justify-between max-w-lg mb-4">
        <div>
          <span className=" text-gray-500">Electroniques</span>
          <h3 className="font-bold text-xl">Simple Watch</h3>
          <span>$ 150</span>
        </div>
        <Button className=" bg-primary-100">Ajouter au panier</Button>
      </div>
      <div>
        <h4 className="font-bold">Description</h4>
        <p className=" text-gray-600 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
          expedita repudiandae? Maiores ex, commodi error nesciunt, reiciendis
          vero deserunt obcaecati repellendus molestias tempora iusto nobis iste
          delectus qui voluptas hic?
        </p>
      </div>
    </GlobalLayout>
  );
}

function ProductImage() {
  return (
    <Carousel className="w-full mb-6">
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-square items-center justify-center p-0  ">
                  <Image
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="aspect-square w-full rounded object-cover"
                    width={1200}
                    height={600}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
