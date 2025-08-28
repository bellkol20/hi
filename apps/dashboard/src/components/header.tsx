'use client';

import { Bell, Menu, LogIn } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <button className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex-1" />
        <Link href="/login" className="inline-flex h-9 items-center gap-2 rounded-md border px-3 text-sm">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </Link>
        <Link href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border">
          <Bell className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
