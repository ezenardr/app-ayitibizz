import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { Link } from 'next-view-transitions';

export default function Cart({ children }: { children: React.ReactNode }) {
  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm max-h-[90dvh] overflow-y-scroll">
          <DrawerHeader>
            <DrawerTitle>Your Cart</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="mx-auto max-w-screen-xl ">
            <div className="mx-auto max-w-3xl">
              <div className="mt-8 px-4">
                <ul className="space-y-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <li className="flex items-center gap-4" key={index}>
                      <Image
                        width={1200}
                        height={600}
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        className="size-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          Basic Tee 6-Pack
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Size:</dt>
                            <dd className="inline">XXS</dd>
                          </div>

                          <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">White</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <form>
                          <label htmlFor="Line1Qty" className="sr-only">
                            {' '}
                            Quantity{' '}
                          </label>

                          <input
                            type="number"
                            min="1"
                            value="1"
                            id="Line1Qty"
                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                          />
                        </form>

                        <button className="text-gray-600 transition hover:text-red-600">
                          <span className="sr-only">Remove item</span>
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>£200</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Link href={'/checkout'}>
              <Button>Checkout</Button>
            </Link>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
