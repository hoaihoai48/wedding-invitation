import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thiệp Cưới – Vũ & Nhím',
  description:
    'Trân trọng kính mời bạn đến dự lễ thành hôn của Vũ & Nhím tại Diên Khánh, Khánh Hòa.',
  openGraph: {
    title: 'Thiệp Cưới – Vũ & Nhím',
    description: 'Trân trọng kính mời bạn đến dự lễ thành hôn của chúng mình.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${lato.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
