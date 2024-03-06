import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Car Rental',
  description: 'Car Rental App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <NavBar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignedIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
