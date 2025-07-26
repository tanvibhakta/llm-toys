import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LLM Toys',
  description: '', // TODO: Figure out a way to encapsulate the definitions of this project
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
