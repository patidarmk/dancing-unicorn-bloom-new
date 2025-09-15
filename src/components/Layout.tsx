import { Outlet } from '@tanstack/react-router';
import { Header } from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <MadeWithApplaa />
    </div>
  );
}