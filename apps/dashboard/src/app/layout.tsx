import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Shadcn + Tailwind Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased bg-background text-foreground">
        <div className="min-h-screen grid grid-cols-[240px_1fr]">
          <Sidebar />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="p-6 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
