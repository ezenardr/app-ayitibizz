import GlobalLayout from '@/components/Core/GlobalLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ChevronsRight, MoveRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

export default function Home() {
  return (
    <GlobalLayout>
      <main className="flex flex-col gap-4">
        <CarouselBanner />
        <Categories />
        <FeaturedProducts />
      </main>
    </GlobalLayout>
  );
}
import Ad1 from '@/img/ads/1.jpg';
function CarouselBanner() {
  const ads = [
    {
      image: Ad1,
    },
    {
      image: Ad1,
    },
    {
      image: Ad1,
    },
    {
      image: Ad1,
    },
  ];
  return (
    <Carousel className="w-full h-32 overflow-hidden ">
      <CarouselContent>
        {ads.map(({ image }, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="overflow-hidden ">
                <CardContent className="flex aspect-auto h-[7.3rem] items-center justify-center p-6 relative ">
                  <Image
                    src={image}
                    alt="Advertissement"
                    className="absolute inset-0 h-full w-full object-cover"
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

function Categories() {
  const categories = [
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
    {
      name: 'Top',
      image:
        'https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      path: '/',
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Categorie</span>
        <Link
          href={'/categories'}
          className="flex items-center gap-2 text-primary-100 text-sm hover:underline underline-offset-4"
        >
          <span>Voir Tout</span>
          <ChevronsRight size={14} />
        </Link>
      </div>
      <Carousel className="w-full  overflow-hidden ">
        <CarouselContent>
          {categories.map(({ image, name, path }, i) => (
            <CarouselItem className="basis-1/4 lg:basis-1/12" key={i}>
              <div className="p-1 aspect-square overflow-hidden ">
                <div className="group relative block aspect-square ">
                  <Image
                    alt=""
                    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-75 rounded-full "
                    width={1200}
                    height={60}
                  />

                  <div className="relative  sm:p-6 lg:p-8 flex flex-col justify-center items-center h-full">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <Link
                        href={'/category'}
                        className="inline-block bg-primary-100 p-3 text-xs font-medium uppercase tracking-wide text-white rounded-full"
                      >
                        <MoveRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href={'/category'}
                className=" font-semibold flex justify-center"
              >
                {name}
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function FeaturedProducts() {
  const products = [
    {
      name: 'Robot Toy',
      image:
        'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
      path: '/',
    },
    {
      name: 'Robot Toy',
      image:
        'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
      path: '/',
    },
    {
      name: 'Robot Toy',
      image:
        'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
      path: '/',
    },
    {
      name: 'Robot Toy',
      image:
        'https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80',
      path: '/',
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Les plus demandés</span>
        <Link
          href={'/products'}
          className="flex items-center gap-2 text-primary-100 text-sm hover:underline underline-offset-4"
        >
          <span>Voir Tout</span>
          <ChevronsRight size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((e, i) => (
          <Card key={i} className="overflow-hidden ">
            <CardContent className="group block overflow-hidden p-0 pb-2">
              <div className="relative h-[250px]">
                <Image
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                  width={1200}
                  height={600}
                />

                <Image
                  src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                  width={1200}
                  height={600}
                />
              </div>

              <div className="relative bg-white p-4 pt-3">
                <Link
                  href={'/product'}
                  className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Limited Edition Sports Trainer
                </Link>

                <div className="mt-1.5 flex items-center justify-between text-gray-900">
                  <p className="tracking-wide">$189.99</p>
                  <Button
                    variant="outline"
                    className="border-[#EEA09B] hover:bg-[#EEA09B] flex items-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    <span className="hidden md:block">Panier</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
