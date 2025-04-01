import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Norton Studios Ltd',
  description: 'Public Sector Digital Services'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (process.env.SHUTTER === 'true') {
    return (
      <html>
        <body>
          <h1>Norton Studios Ltd</h1>
          <p>New website coming soon</p>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          <Header />
          <main id="main" className="flex-grow font-[family-name:var(--font-geist-sans)] pt-4 lg:pt-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
