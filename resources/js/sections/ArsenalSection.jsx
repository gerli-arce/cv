import React from 'react';
import { Database, Layout, Server, Terminal } from 'lucide-react';
import { techCategories } from '../data/portfolioData';

const iconMap = { Layout, Server, Database, Terminal };

export default function ArsenalSection() {
    return (
        <section className="relative section-divider overflow-hidden bg-gradient-to-br from-[#0b0f24] via-[#0a0d1c] to-[#0c1024] py-24" data-animate="fade-up">
            <div className="pointer-events-none absolute -left-10 top-16 h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="mb-16 text-center" data-animate="fade-up">
                    <div className="relative inline-flex items-center justify-center">
                        <span className="absolute -left-10 h-20 w-20 rounded-full bg-indigo-500/25 blur-2xl" />
                        <h2 className="relative text-4xl font-bold text-white sm:text-5xl">Arsenal Tecnologico</h2>
                    </div>
                    <div className="mx-auto mt-4 h-1 w-28 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    </div>
                    <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200/85">
                        Stack curado para productos escalables: frontend veloz, backend robusto y DevOps automatizado.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {techCategories.map((category, idx) => {
                        const Icon = iconMap[category.icon] || Layout;
                        return (
                            <div
                                key={category.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/6 p-8 shadow-[0_26px_90px_-48px_rgba(0,0,0,0.85)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_32px_100px_-52px_rgba(99,102,241,0.5)]"
                                data-animate="fade-up"
                                style={{ '--delay': `${idx * 0.06}s` }}
                            >
                                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rotate-6 rounded-full bg-gradient-to-br from-indigo-500/18 to-purple-500/18 blur-3xl transition duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
                                <div className="flex items-start gap-4">
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.colorClass} text-white shadow-[0_16px_38px_-20px_rgba(129,140,248,0.8)]`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200/90">{category.title}</p>
                                        <h3 className="text-xl font-semibold text-white">Stack premium</h3>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-xs font-semibold text-indigo-50 shadow-inner shadow-white/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/50 hover:shadow-[0_12px_32px_-22px_rgba(129,140,248,0.7)]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
