import './globals.css';
import { Inter } from 'next/font/google';
import NextAuthProvider from '@/libs/NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Medium',
  description: 'Medium Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
