import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Twitter Clone',
  description: 'A modern Twitter clone built with Next.js and Radix UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
