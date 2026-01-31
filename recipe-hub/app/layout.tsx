import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import AuthMenu from '@/components/AuthMenu';
import NavLinks from '@/components/NavLinks';
import MobileNav from '@/components/MobileNav';

export const metadata: Metadata = {
  title: "Recipe Hub",
  description: "Create, share, and discover recipes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col sm:flex sm:flex-col sm:flex sm:bg-gray-500 sm:pb-1 sm:flex-row ">

          <nav className="relative z-50 flex flex-row sm:flex sm:flex-col sm:w-48 sm:p-4 sm:justify-between sm:bg-gray-100 sm:m-1 sm:rounded-lg sm:text-gray-700 ">

            {/* LOGO Top Left */}
            <div className="w-full flex flex-row items-center justify-between ml-[.25em] mr-[.5em] sm:m-0">
              <Link href="/" className="p-2 text-2xl font-bold relative group">
                RecipeHub
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <MobileNav className="m-2 sm:hidden"/>
            </div>

            {/* Browse + Dashboard grouped together */}
            <div className="hidden sm:flex">
              <NavLinks />
            </div>

            {/* Login/Logout */}
            <div className="hidden sm:flex flex-col p-2">
              <AuthMenu />
            </div>

          </nav>

          <div className="relative z-0 flex flex-col flex-1 bg-gray-100 m-1 rounded-lg text-gray-700">
            <main className="flex-grow ">{children}</main>
            <footer className="flex h-8 justify-center bg-gray-200 items-center rounded-b-lg">
              <p>&copy; 2026 Recipe Hub</p>
            </footer>
          </div>

        </div>
      </body>
    </html>
  );
}
