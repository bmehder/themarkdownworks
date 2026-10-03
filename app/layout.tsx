import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const themeScript = `
  try {
    const saved = localStorage.getItem('tmw-theme');
    const preference = ['system', 'dark', 'light'].includes(saved) ? saved : 'system';
    const theme = preference === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : preference;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    const theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }
`;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000',
  ),
  title: 'The Markdown Works',
  description: 'Markdown works. We build around that. Home to Chippy, CheekyCMS, and Docklands.',
  openGraph: {
    title: 'The Markdown Works',
    description: 'Markdown works. We build around that. Home to Chippy, CheekyCMS, and Docklands.',
    type: 'website',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
