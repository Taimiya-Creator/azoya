
"use client";

import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { LogOut, User, Wand2 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';

export default function AppHeader() {
  const { user, loading: authLoading, signOut } = useAuth();

  const AuthButton = () => {
    if (authLoading) {
      return <Skeleton className="h-10 w-24" />;
    }
    if (user) {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="grid gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium leading-none">
                  Signed in as
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {user.email}
                </p>
              </div>
              <Button variant="destructive" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      );
    }
    return (
      <div className="flex gap-2">
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Wand2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Azoya</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">Home</Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <AuthButton />
        </div>
      </div>
    </header>
  );
}
