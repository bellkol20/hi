import Link from 'next/link';
import { Home, LineChart, Settings, LogIn } from 'lucide-react';

const nav = [
  { href: '/', label: 'Overview', icon: Home },
  { href: '/reports', label: 'Reports', icon: LineChart },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/login', label: 'Login', icon: LogIn },
];

export function Sidebar() {
  return (
    <aside className="hidden md:block border-r bg-background p-4">
      <div className="mb-6 text-xl font-semibold">Dashboard</div>
      <nav className="space-y-1">
        {nav.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
