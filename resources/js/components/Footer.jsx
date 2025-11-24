import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const links = [
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: <Linkedin className="h-4 w-4" /> },
        { label: 'GitHub', href: 'https://github.com', icon: <Github className="h-4 w-4" /> },
        { label: 'Correo', href: 'mailto:yoninfantearce@gmail.com', icon: <Mail className="h-4 w-4" /> },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-r from-[#060712] via-[#0a0d1c] to-[#060712] px-6 py-12 text-slate-200 sm:px-10">
            <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 rounded-full bg-purple-500/12 blur-3xl" />
            <div className="mx-auto flex max-w-6xl flex-col gap-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200">Portafolio</p>
                        <h4 className="text-2xl font-bold text-white">Yon Infante</h4>
                        <p className="mt-2 max-w-xl text-sm text-slate-300/85">
                            Fullstack + IA: Laravel, Node.js, React, DevOps y automatizacion para productos rápidos, observables y listos para escalar.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1">
                                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                                SLA 99.9%
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1">
                                <Sparkles className="h-4 w-4 text-indigo-200" />
                                IA & automatizacion
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-indigo-100 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:text-white"
                            >
                                {link.icon}
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_-44px_rgba(99,102,241,0.45)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Listo para el siguiente release</p>
                        <p className="text-sm text-slate-200/85">
                            Integro backend, frontend, datos y DevOps con QA y monitoreo desde el dia uno.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_-20px_rgba(99,102,241,0.65)] transition-all hover:-translate-y-1"
                        >
                            Hablemos
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-semibold text-indigo-100 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:text-white"
                        >
                            Ver proyectos
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-slate-400/80 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Yon Infante. Todos los derechos reservados.</span>
                    <span className="text-indigo-200">Construido con Laravel + React</span>
                </div>
            </div>
        </footer>
    );
}
