import './globals.css';
import React, { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import Header from '@/app/components/Header';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'NextJS 13 Demo',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                <main className="container mx-auto px-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
