import React from 'react';
import { CheckCircle, Layout, Terminal } from 'lucide-react';
import { personalSkills, milestones } from '../data/portfolioData';

export default function AboutSection() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-slate-960 via-slate-940 to-slate-950 py-20"
            data-animate="fade-up"
        >
            <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-indigo-500/18 blur-3xl" />
            <div className="pointer-events-none absolute right-6 bottom-0 h-80 w-80 rounded-full bg-purple-500/12 blur-3xl" />
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="mb-14 flex flex-col items-center gap-3 text-center">
                    <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200 shadow-[0_10px_40px_-20px_rgba(99,102,241,0.8)]">
                        Sobre mi
                    </span>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Perfil y trayectoria</h2>
                    <p className="max-w-3xl text-sm text-slate-200/85">
                        Ingeniero de Software con IA orientado a productividad y automatizacion, equilibrando diseno limpio con
                        ingenieria escalable.
                    </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div
                            className="group relative overflow-hidden rounded-3xl border border-white/6 bg-white/5 p-7 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur"
                            data-animate="fade-right"
                        >
                            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                <div className="absolute -right-10 -top-12 h-44 w-44 rotate-6 rounded-full bg-gradient-to-br from-indigo-500/25 to-purple-500/20 blur-3xl" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_15px_35px_-18px_rgba(99,102,241,0.9)]">
                                    <Terminal className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-indigo-200">Fullstack</p>
                                    <h3 className="text-lg font-semibold text-white">Fullstack ? Laravel + React</h3>
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-slate-200/85">
                                Ingeniero de Software con inteligencia artificial. Experiencia en PHP/Laravel, Node.js, React, Python y Java;
                                administro servidores Linux/Windows, optimizo bases de datos y pipelines con foco en IA y automatizacion.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                {personalSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-full border border-white/8 bg-white/8 px-4 py-2 text-xs font-semibold text-indigo-100 shadow-inner shadow-white/10 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/60 hover:shadow-[0_12px_30px_-22px_rgba(129,140,248,0.8)]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div
                                className="relative overflow-hidden rounded-2xl border border-white/6 bg-white/5 p-5 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.9)] backdrop-blur"
                                data-animate="fade-up"
                                style={{ '--delay': '0.05s' }}
                            >
                                <div className="pointer-events-none absolute right-2 top-2 h-10 w-10 rounded-full bg-indigo-400/20 blur-xl" />
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Stack</p>
                                <h4 className="mt-2 text-base font-semibold text-white">Productividad</h4>
                                <p className="mt-2 text-sm text-slate-200/80">CI/CD, monitoreo y automatizacion para entregar mas rapido.</p>
                            </div>
                            <div
                                className="relative overflow-hidden rounded-2xl border border-white/6 bg-white/5 p-5 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.9)] backdrop-blur"
                                data-animate="fade-up"
                                style={{ '--delay': '0.15s' }}
                            >
                                <div className="pointer-events-none absolute right-3 bottom-2 h-10 w-10 rounded-full bg-purple-400/20 blur-xl" />
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">UX</p>
                                <h4 className="mt-2 text-base font-semibold text-white">Micro-interacciones</h4>
                                <p className="mt-2 text-sm text-slate-200/80">Motion sutil y feedback inmediato para experiencias claras.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative overflow-hidden rounded-3xl border border-white/6 bg-white/5 p-8 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur"
                        data-animate="fade-left"
                    >
                        <div className="pointer-events-none absolute -left-6 top-6 h-24 w-24 rounded-full bg-indigo-400/15 blur-2xl" />
                        <div className="pointer-events-none absolute right-0 bottom-4 h-28 w-28 rounded-full bg-purple-400/12 blur-2xl" />
                        <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-white">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_12px_30px_-16px_rgba(99,102,241,0.9)]">
                                <CheckCircle className="h-5 w-5" />
                            </span>
                            Timeline de impacto
                        </h3>
                        <div className="relative space-y-8 before:absolute before:left-5 before:top-2 before:h-[90%] before:w-[2px] before:bg-gradient-to-b before:from-indigo-400/70 before:via-purple-400/50 before:to-pink-400/30">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone.year}
                                    className={`relative flex gap-4 rounded-2xl border border-white/8 bg-white/8 p-4 shadow-[0_12px_36px_-28px_rgba(0,0,0,0.85)] transition-transform duration-300 hover:-translate-y-1 ${
                                        index === 0 ? 'ring-1 ring-purple-400/40 shadow-[0_16px_40px_-26px_rgba(167,139,250,0.45)]' : ''
                                    }`}
                                    data-animate="fade-up"
                                    style={{ '--delay': `${index * 0.08}s` }}
                                >
                                    <div
                                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${milestone.accent} text-white shadow-[0_10px_28px_-18px_rgba(129,140,248,0.9)]`}
                                    >
                                        <span className="text-sm font-bold">{milestone.year}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base font-semibold text-white">{milestone.title}</h4>
                                        <p className="text-sm leading-relaxed text-slate-200/85">{milestone.description}</p>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200">
                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300" />
                                            {milestone.tag}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
