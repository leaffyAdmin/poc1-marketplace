import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Playfair_Display as FontHeading } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import { Providers } from './providers';
import { cn } from '@/lib/utils';
import Footer from './components/Footer/Footer';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: '--font-sans',
});

const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: 'Leaffy @ earth - Your Plant Marketplace',
    template: '%s | Leaffy @ earth'
  },
  description: 'Find the perfect plants for your space. Premium quality plants with designer pots.',
  keywords: ['plants', 'indoor plants', 'pots', 'garden', 'home decor', 'plant marketplace'],
  authors: [{ name: 'Leaffy @ earth' }],
  creator: 'Leaffy @ earth',
  metadataBase: new URL('https://leaffyearth.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leaffyearth.com',
    title: 'Leaffy @ earth - Your Plant Marketplace',
    description: 'Find the perfect plants for your space. Premium quality plants with designer pots.',
    siteName: 'Leaffy @ earth'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leaffy @ earth - Your Plant Marketplace',
    description: 'Find the perfect plants for your space. Premium quality plants with designer pots.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
