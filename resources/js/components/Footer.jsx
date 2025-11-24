import React from 'react';

export default function Footer() {
    const links = [
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Contacto', href: '/contact' },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-r from-[#080a16] via-[#0a0d1c] to-[#080a16] px-6 py-12 text-slate-200 sm:px-10">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-40 w-40 rounded-full bg-purple-500/12 blur-3xl" />
            <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200">Portafolio</p>
                    <h4 className="text-xl font-bold text-white">Yon Infante</h4>
                    <p className="mt-2 text-sm text-slate-300/80">
                        Desarrollo fullstack orientado a productividad, automatizacion y experiencias premium.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-indigo-100 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400/80">
                <span>? {new Date().getFullYear()} Yon Infante. Todos los derechos reservados.</span>
                <span className="text-indigo-200">Construido con Laravel + React</span>
            </div>
        </footer>
    );
}
