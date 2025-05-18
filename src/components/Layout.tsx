import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
];

const socials = [
  { 
    icon: Github, 
    href: 'https://github.com/yourusername',
    label: 'GitHub'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn'
  },
  { 
    icon: Mail, 
    href: 'mailto:your.email@example.com',
    label: 'Email'
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-notion-light dark:bg-notion-dark text-notion dark:text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 dark:border-white/5 bg-notion-light/80 dark:bg-notion-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold tracking-tight">Portfolio</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200',
                    location.pathname === item.path
                      ? 'bg-notion-hover dark:bg-notion-dark-hover'
                      : 'hover:bg-notion-hover dark:hover:bg-notion-dark-hover'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-3 pl-3 border-l border-black/5 dark:border-white/5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-notion-hover dark:hover:bg-notion-dark-hover transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md ml-2 hover:bg-notion-hover dark:hover:bg-notion-dark-hover"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'sm:hidden border-b border-black/5 dark:border-white/5',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === item.path
                    ? 'bg-notion-hover dark:bg-notion-dark-hover'
                    : 'hover:bg-notion-hover dark:hover:bg-notion-dark-hover'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3 px-3 py-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:bg-notion-hover dark:hover:bg-notion-dark-hover"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}