import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Database, Github, Layout, Linkedin, Server, Terminal } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.25),transparent_20%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_20%)]" />
            <div className="mx-auto flex min-h-[80vh] max-w-[1400px] flex-col-reverse items-center gap-12 px-4 pt-28 pb-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
                <div className="relative w-full max-w-4xl lg:w-[58%] lg:-translate-x-10" data-animate="fade-right" style={{ '--delay': '0.1s' }}>
                    <div className="absolute -left-12 -top-10 h-44 w-44 rounded-full bg-indigo-500/30 blur-3xl" />
                    <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

                    <div className="relative mx-auto max-w-2xl">
                        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-indigo-600/40 to-purple-500/40 blur-xl" />
                        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-4 shadow-2xl shadow-indigo-900/40 backdrop-blur">
                            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                                <img
                                    className="relative h-96 w-full rounded-xl object-cover shadow-lg lg:h-[28rem]"
                                    src="/developer-portrait.png"
                                    alt="Retrato"
                                />
                                <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 backdrop-blur">
                                    Portafolio 2025
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-10 top-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 backdrop-blur">
                            <Terminal className="h-4 w-4 text-indigo-200" />
                            {'< />'} Productividad
                        </div>
                        <div className="absolute -right-10 top-12 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 backdrop-blur">
                            <Server className="h-4 w-4 text-indigo-200" />
                            APIs & Bots
                        </div>
                        <div className="absolute left-6 -bottom-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 backdrop-blur">
                            <Layout className="h-4 w-4 text-indigo-200" />
                            Dashboards
                        </div>
                        <div className="absolute right-4 -bottom-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 backdrop-blur">
                            <Database className="h-4 w-4 text-indigo-200" />
                            Datos en tiempo real
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-3xl space-y-8 lg:w-[42%]" data-animate="fade-left" style={{ '--delay': '0.1s' }}>
                    <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">
                        <span className="h-[1px] w-10 bg-indigo-300/70" />
                        Portafolio 2025
                    </div>
                    <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                        Yon Infante
                        <br className="hidden sm:block" />
                        <span className="text-indigo-200"> Ingeniero de Software + IA</span>
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-200">
                        Ingeniero de Software con enfoque en IA. Desarrollo apps web y servicios backend con Laravel, Node.js y React,
                        integrando datos, DevOps y automatizacion para entregar productos rapidos y robustos.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            to="/projects"
                            className="inline-flex items-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1 hover:bg-indigo-400"
                        >
                            <ArrowDown className="mr-2 h-4 w-4" />
                            Ver proyectos
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-100"
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            Hablemos
                        </Link>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:border-gray-200 hover:text-white"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-indigo-900/40 backdrop-blur">
                        <div className="mb-3 flex items-center gap-2 rounded-xl bg-slate-900/70 px-3 py-2">
                            <span className="h-2 w-2 rounded-full bg-rose-400" />
                            <span className="h-2 w-2 rounded-full bg-amber-300" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="ml-3 text-xs font-semibold uppercase tracking-wide text-indigo-100">Proyectos en vivo</span>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-inner shadow-indigo-900/30">
                            <img src="/general-data-dashboard.png" alt="Mockup de proyecto" className="h-64 w-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
