import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sun, MoonStar, X } from 'lucide-react';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState('dark');
    const navLinks = [
        { label: 'Yo', href: '/' },
        { label: 'Proyectos', href: '/projects' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contacto', href: '/contact' },
    ];

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            setTheme(stored);
        }
    }, []);

    useEffect(() => {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-mode', isLight);
        document.body.classList.toggle('dark-mode', !isLight);
        document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    const handleNavClick = () => setMobileOpen(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-slate-950/92 via-slate-950/88 to-purple-900/85 px-4 py-4 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-2 sm:px-4">
                <Link
                    to="/"
                    className="text-lg font-extrabold tracking-tight text-white drop-shadow-[0_0_12px_rgba(129,140,248,0.7)]"
                    onClick={handleNavClick}
                >
                    <span className="bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent">
                        Yon Infante
                    </span>
                </Link>

                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-6 text-sm font-semibold text-indigo-100 sm:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onClick={handleNavClick}
                                className="rounded-full px-3 py-2 transition-all duration-200 hover:text-white hover:shadow-[0_0_12px_rgba(129,140,248,0.7)] hover:backdrop-blur-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 text-indigo-50 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                            aria-label="Cambiar tema"
                        >
                            {theme === 'light' ? <MoonStar className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        </button>
                        <Link
                            to="/contact"
                            onClick={handleNavClick}
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(167,139,250,0.8)]"
                        >
                            Contacto
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="rounded-full p-2 text-indigo-100 transition-colors hover:bg-white/10 sm:hidden"
                        onClick={() => setMobileOpen((open) => !open)}
                        aria-label="Abrir menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {mobileOpen && (
                <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl sm:hidden">
                    <div className="mx-auto max-w-6xl px-6 py-3 sm:px-8">
                        <div className="flex flex-col gap-2 text-sm font-semibold text-indigo-100">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={handleNavClick}
                                    className="rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/10 hover:text-white hover:shadow-[0_0_12px_rgba(129,140,248,0.6)]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={handleNavClick}
                                className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(167,139,250,0.8)]"
                            >
                                Contacto
                            </Link>
                            <button
                                type="button"
                                onClick={() => {
                                    toggleTheme();
                                    handleNavClick();
                                }}
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                                aria-label="Cambiar tema"
                            >
                                {theme === 'light' ? 'Modo noche' : 'Modo dia'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
