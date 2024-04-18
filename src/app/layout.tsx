import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
// import AuthProvider from './AuthProvider';
// import { Toaster } from 'sonner';

const font_sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Store - Ayitibizz',
  description: 'Premium E-Commerce platforme Haitien',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fr" suppressHydrationWarning>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            font_sans.variable
          )}
        >
          {/* <AuthProvider> */}
          {children}
          {/* <Toaster richColors /> */}
          {/* </AuthProvider> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
