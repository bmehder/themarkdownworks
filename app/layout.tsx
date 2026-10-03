import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://the-markdown-works.bmehder.chatgpt.site'),
  title: 'The Markdown Works',
  description: 'Markdown works. We build around that. Home to Chippy, CheekyCMS, and Docklands.',
  openGraph: {
    title: 'The Markdown Works',
    description: 'Markdown works. We build around that. Home to Chippy, CheekyCMS, and Docklands.',
    type: 'website',
    url: 'https://the-markdown-works.bmehder.chatgpt.site',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'The Markdown Works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Markdown Works',
    description: 'Markdown works. We build around that.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
