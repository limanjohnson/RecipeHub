import type { Metadata } from 'next';
import './globals.css';
import { LogIn, User, UserCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Recipe Hub",
  description: "Create, share, and discover recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-500 pb-1">
          {/* <header className="bg-gray-200 dark:text-gray-500 ">
            TODO: Search Bar
          </header> */}
          <nav className="flex flex-col w-48 p-4 justify-between bg-gray-100 m-1 rounded-lg">
            <a href="/" className="p-2 text-2xl font-bold relative group">
            RecipeHub
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <div  className="p-2 border rounded-lg hover:bg-gray-300 transition">
              <a href="/recipes">Browse</a>
            </div>
            <div className="p-2 ">
              <a href="/login" className="relative group flex flex-row items-center gap-2">
              <LogIn size={20} />Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              
            </div>
              
          </nav>

          <div className="flex flex-col flex-1 bg-gray-100 m-1 rounded-lg">
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
