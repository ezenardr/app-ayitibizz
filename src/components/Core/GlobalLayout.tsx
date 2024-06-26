'use client';
import { Link } from 'next-view-transitions';
import {
  Home,
  LayoutDashboard,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/img/logos/logo-simple.png';
import Logo2 from '@/img/logos/logo-texte-ayitibizz.png';
import Cart from './Cart';
// import { signOut } from 'next-auth/react';

const links = [
  { path: '/', Icon: Home, label: 'Acceuil' },
  { path: '/categories', Icon: LayoutDashboard, label: 'Catégories' },
  { path: '/products', Icon: Package, label: 'Produits' },
  { path: '/orders', Icon: ShoppingCart, label: 'Commandes' },
];
export default function GlobalLayout({
  children,
  subpage,
}: {
  children: React.ReactNode;
  subpage?: string;
}) {
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    // bg-muted/40
    <div className="flex min-h-screen w-full flex-col bg-white no-scrollbar">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex ">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base mb-3"
          >
            <Image src={Logo} alt="Logo" width={40} />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <TooltipProvider>
            {links.map(({ Icon, label, path }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Link
                    href={path}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      isActive(path)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    }
                  transition-colors hover:text-foreground md:h-8 md:w-8`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{label}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/settings"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                {links.map(({ path, Icon, label }) => (
                  <Link
                    key={label}
                    href={path}
                    className={`flex items-center gap-4 px-2.5 ${
                      isActive(path)
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    } hover:text-foreground}`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Acceuil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {subpage && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <p>{subpage}</p>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0 flex justify-center ">
            <Image src={Logo2} alt="Logo" className="md:hidden" width={50} />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground hidden md:block" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px] hidden md:block "
            />
          </div>
          <div className="flex items-center gap-6">
            <Cart>
              <ShoppingCart className="text-gray-600 cursor-pointer hover:text-gray-900" />
            </Cart>
            <Link href={'/search'}>
              <Search className="md:hidden text-gray-600 hover:text-gray-900" />
            </Link>
          </div>

          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="p-4 sm:px-6 sm:py-0">{children}</div>
      </div>
    </div>
  );
}
