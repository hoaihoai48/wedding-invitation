import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script, Oswald, Lato } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

// Vintage serif cho heading – giống font thiệp cưới cổ điển
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Script font cho "Trân trọng Kính mời", "Vào lúc" – chữ viết tay
const dancingScript = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Condensed bold cho tên cặp đôi – vintage
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Body text
const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Thiệp Cưới – Hoài Vũ & Thục Trinh',
  description:
    'Trân trọng kính mời bạn đến dự lễ thành hôn của Nguyễn Hoài Vũ & Nguyễn Minh Thục Trinh tại Diên Khánh, Khánh Hòa.',
  openGraph: {
    title: 'Thiệp Cưới – Hoài Vũ & Thục Trinh',
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
    <html lang="vi" className={`${playfair.variable} ${dancingScript.variable} ${oswald.variable} ${lato.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
