import React from 'react';
import { ExternalLink } from 'lucide-react';
import { posts } from '../data/portfolioData';

export default function BlogSection() {
    return (
        <section className="relative section-divider overflow-hidden bg-gradient-to-br from-[#0b0d1f] via-[#0c0f24] to-[#0b0d1f] py-20">
            <div className="pointer-events-none absolute left-0 top-0 h-60 w-60 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-6 bottom-6 h-64 w-64 rounded-full bg-purple-500/12 blur-3xl" />
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="mb-14 text-center" data-animate="fade-up">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Blog</h2>
                    <div className="mx-auto mt-4 h-1 w-20 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    </div>
                    <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-200/85">
                        Notas rapidas sobre lo que voy aprendiendo y aplicando en proyectos reales.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {posts.map((post, idx) => (
                        <article
                            key={post.id}
                            className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/8 p-6 shadow-[0_20px_60px_-42px_rgba(0,0,0,0.9)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-48px_rgba(129,140,248,0.35)]"
                            data-animate="fade-up"
                            style={{ '--delay': `${idx * 0.06}s` }}
                        >
                            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-indigo-200">{post.title}</h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-200/85">{post.summary}</p>
                            <a
                                href="#"
                                className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
                            >
                                Leer mas
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
