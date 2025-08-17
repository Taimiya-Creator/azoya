import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { AuthProvider } from '@/hooks/use-auth';


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
            <main className="flex-grow">
              {children}
            </main>
            <footer className="text-center p-4 text-muted-foreground text-sm">
              Designed by Zenova (Taimiya Amjad)
            </footer>
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
