import GlobalLayout from '@/components/Core/GlobalLayout';
import { Star } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export default function Category() {
  return (
    <GlobalLayout>
      <h3 className="font-bold text-lg mb-6">Jackets</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Link
            href="/product"
            className="group relative block overflow-hidden"
            key={index}
          >
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white/60 p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span className="sr-only">Wishlist</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <Image
              height={600}
              width={1200}
              src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
              alt=""
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-md"
            />

            <div className="relative  pt-2 ">
              <div className="flex justify-between">
                <h3 className=" text-sm font-semibold  text-gray-700">
                  Robot Toy
                </h3>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <Star size={14} color=" yellow" fill="yellow" />{' '}
                  <span>4.9</span>
                </div>
              </div>
              <p className=" text-sm font-bold text-gray-700">$14.99</p>
            </div>
          </Link>
        ))}
      </div>
    </GlobalLayout>
  );
}
