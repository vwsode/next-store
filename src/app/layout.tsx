import type { Metadata } from 'next';
import '@/assets/styles/styles.scss';

import { Footer, Header } from '@/components/layout';
import StoreProvider from '@/store/store';

export const metadata: Metadata = {
    title: 'RH Store',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <Header />
                    {children}
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
