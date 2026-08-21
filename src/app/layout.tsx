import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vutrinh-wedding.vercel.app'),
  title: 'Thiệp Cưới – Hoài Vũ & Thục Trinh',
  description:
    'Trân trọng kính mời bạn đến dự lễ thành hôn của Nguyễn Hoài Vũ & Nguyễn Minh Thục Trinh tại Diên Khánh, Khánh Hòa.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Thiệp Cưới – Hoài Vũ & Thục Trinh',
    description: 'Trân trọng kính mời bạn đến dự lễ thành hôn của chúng mình.',
    url: 'https://vutrinh-wedding.vercel.app',
    siteName: 'Thiệp Cưới Hoài Vũ & Thục Trinh',
    images: [
      {
        url: '/images/wedding-cover-4151.webp',
        width: 1200,
        height: 630,
        alt: 'Hoài Vũ & Thục Trinh Wedding',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Google Fonts used by the Vietnamese vintage wedding design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Righteous&family=Bungee&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
