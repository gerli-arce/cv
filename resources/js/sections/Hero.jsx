import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowDown,
    Database,
    Github,
    Layout,
    Linkedin,
    Server,
    Terminal,
    Sparkles,
    ShieldCheck,
    Bot,
    Gauge,
    ChevronRight,
} from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#040510] via-[#0a0d1f] to-[#0c1030] text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(139,92,246,0.18),transparent_25%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.16),transparent_22%)]" />
            <div className="mx-auto flex min-h-[82vh] max-w-[1400px] flex-col-reverse items-center gap-12 px-4 pt-24 pb-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
                <div className="relative w-full max-w-4xl lg:w-[55%] lg:-translate-x-10 lg:-translate-y-8">
                    <div className="absolute -left-14 -top-12 h-48 w-48 rounded-full bg-indigo-500/25 blur-3xl" />
                    <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-purple-500/18 blur-3xl" />

                    <div className="relative mx-auto max-w-2xl animate-hero-rise">
                        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-indigo-500/35 via-purple-500/30 to-sky-500/20 blur-2xl" />
                        <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-slate-900/70 p-4 shadow-[0_30px_90px_-50px_rgba(79,70,229,0.7)] backdrop-blur">
                            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-100">
                                <span className="inline-flex items-center gap-2">
                                    <Sparkles className="h-4 w-4" />
                                    Portafolio 2025
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-[11px] text-indigo-50">
                                    Disponible Q1 2025
                                </span>
                            </div>

                            <div className="relative rounded-[22px] bg-gradient-to-br from-slate-800 to-slate-900 p-[10px]">
                                <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-white/8 via-indigo-500/10 to-purple-500/8" />
                                <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/60">
                                    <img
                                        className="h-[25rem] w-full object-cover shadow-2xl shadow-indigo-900/40 lg:h-[28rem]"
                                        src="/images/profile.jpg"
                                        alt="Foto de perfil"
                                    />
                                </div>

                                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-50 shadow-lg shadow-indigo-900/30 backdrop-blur">
                                    <Terminal className="h-4 w-4 text-indigo-100" />
                                    <span>Fullstack + IA</span>
                                </div>
                                <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-50 shadow-lg shadow-indigo-900/30 backdrop-blur">
                                    <Server className="h-4 w-4 text-indigo-100" />
                                    <span>APIs & Bots</span>
                                </div>
                                <div className="absolute -left-4 bottom-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-50 shadow-lg shadow-indigo-900/30 backdrop-blur">
                                    <Layout className="h-4 w-4 text-indigo-100" />
                                    Dashboards
                                </div>
                                <div className="absolute -right-4 bottom-4 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-50 shadow-lg shadow-indigo-900/30 backdrop-blur">
                                    <Database className="h-4 w-4 text-indigo-100" />
                                    Datos en tiempo real
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-indigo-50">
                                    <ShieldCheck className="h-5 w-5 text-emerald-300" />
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-200">SLA</p>
                                        <p className="font-semibold">99.9% uptime</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-indigo-50">
                                    <Gauge className="h-5 w-5 text-sky-300" />
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.18em] text-sky-200">Performance</p>
                                        <p className="font-semibold">TTFB &lt; 200ms</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-indigo-50">
                                    <Bot className="h-5 w-5 text-purple-200" />
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.18em] text-purple-200">IA & bots</p>
                                        <p className="font-semibold">Automatizacion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-3xl space-y-7 lg:w-[45%]" data-animate="fade-left" style={{ '--delay': '0.12s' }}>
                    <div className="inline-flex items-center gap-3 rounded-full border border-indigo-300/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100">
                        <span className="h-[1px] w-8 bg-indigo-200/70" />
                        Portafolio 2025
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[10px] text-indigo-50">
                            <Sparkles className="h-3 w-3" />
                            IA first
                        </span>
                    </div>

                    <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                        Yon Infante
                        <br className="hidden sm:block" />
                        <span className="text-indigo-100"> Ingeniero de Software + IA</span>
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-200">
                        Desarrollo apps web y servicios backend con Laravel, Node.js y React. Integro datos, DevOps y automatizacion con IA
                        para entregar productos rapidos, observables y listos para escalar.
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                            <Terminal className="h-5 w-5 text-indigo-200" />
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Backend + Frontend</p>
                                <p className="text-sm text-white">Laravel, Node, React</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                            <Server className="h-5 w-5 text-indigo-200" />
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Pipelines</p>
                                <p className="text-sm text-white">CI/CD, monitoreo, alertas</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            to="/projects"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(99,102,241,0.65)] transition-all hover:-translate-y-1"
                        >
                            <ArrowDown className="mr-2 h-4 w-4" />
                            Ver proyectos
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-50"
                        >
                            <Linkedin className="mr-2 h-4 w-4" />
                            Hablemos
                        </Link>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:border-indigo-200 hover:text-indigo-50"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-indigo-900/35 backdrop-blur">
                        <div className="mb-3 flex items-center gap-2 rounded-xl bg-slate-900/70 px-3 py-2">
                            <span className="h-2 w-2 rounded-full bg-rose-400" />
                            <span className="h-2 w-2 rounded-full bg-amber-300" />
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="ml-3 text-xs font-semibold uppercase tracking-wide text-indigo-100">Proyectos en vivo</span>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-inner shadow-indigo-900/30">
                            <img src="/general-data-dashboard.png" alt="Mockup de proyecto" className="h-64 w-full object-cover" />
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-100">
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1">
                                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                                QA + monitoreo
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1">
                                <Server className="h-4 w-4 text-indigo-200" />
                                DevOps listo
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-white/8 px-3 py-1">
                                <ChevronRight className="h-4 w-4 text-indigo-200" />
                                Go live rapido
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
