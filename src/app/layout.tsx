import type { Metadata } from 'next';
import { Poppins, Caveat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Circles of Change | Non-Profit Community & Sustainability Collective',
  description:
    'Circles of Change unites community recycling initiatives, youth kindness programs like Sammies Buddy Bench, and signature events like the Race for Recycling 5K into an unbroken circle of impact.',
  keywords: [
    'Circles of Change',
    'Sammie Buddy Bench Project',
    'Race for Recycling 5K',
    'Plastic Recycling Non-Profit',
    'Youth Environmental Leadership',
    'Circular Economy Community',
  ],
  authors: [{ name: 'Circles of Change Organization' }],
  openGraph: {
    title: 'Circles of Change | Sustainable Community Collective',
    description:
      'Connecting grassroots eco-initiatives, youth leadership projects, and regional waste-recovery programs into one community-driven ecosystem.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Circles of Change',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased text-charcoal-ink bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
