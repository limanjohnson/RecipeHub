import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { LogIn, User, UserCircle, Search, LogOut } from 'lucide-react';
import AuthMenu from '@/components/AuthMenu'

export const metadata: Metadata = {
  title: "Recipe Hub",
  description: "Create, share, and discover recipes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Auth UI is handled client-side by <AuthMenu /> which subscribes to auth state
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-500 pb-1">
          {/* <header className="bg-gray-200 dark:text-gray-500 ">
            TODO: Search Bar
          </header> */}
          <nav className="flex flex-col w-48 p-4 justify-between bg-gray-100 m-1 rounded-lg text-gray-700">
            <Link href="/" className="p-2 text-2xl font-bold relative group">
            RecipeHub
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="flex flex-col gap-2">
              <div className="p-2 border justify-center items-center rounded-lg hover:bg-gray-300 transition duration-300">
                <Link href="/recipes" className="flex gap-2"><Search />Browse</Link>
              </div>
            </div>
            <AuthMenu />
              
          </nav>

          <div className="flex flex-col flex-1 bg-gray-100 m-1 rounded-lg text-gray-700">
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
