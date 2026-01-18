import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-body antialiased">
                {children}
            </body>
        </html>
    );
}
