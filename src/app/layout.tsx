
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { AuthProvider } from '@/hooks/use-auth';
import AppHeader from '@/components/app-header';

export const metadata: Metadata = {
  title: 'Azoya',
  description: 'Create a website with a single prompt.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head />
      <body>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="text-center p-4 text-muted-foreground text-sm space-y-1">
              <p>© 2025 Azoya. All Rights Reserved.</p>
              <p>Designed by Zenova (Taimiya Amjad)</p>
            </footer>
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
