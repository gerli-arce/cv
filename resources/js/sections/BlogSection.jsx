import React from 'react';
import { ExternalLink, CalendarClock, Clock, Tag, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data/portfolioData';

export default function BlogSection() {
    const [featured, ...restPosts] = posts;
    const categories = Array.from(new Set(posts.map((post) => post.category)));

    return (
        <section className="relative section-divider overflow-hidden bg-gradient-to-br from-[#060712] via-[#0a0c1c] to-[#050611] py-20">
            <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/16 blur-3xl" />

            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-6" data-animate="fade-right" style={{ '--delay': '0.05s' }}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200 shadow-[0_12px_36px_-24px_rgba(99,102,241,0.65)]">
                            <Sparkles className="h-4 w-4" />
                            Bitacora tecnica
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Blog y notas aplicables</h2>
                        <p className="max-w-2xl text-base text-slate-200/85">
                            Practicas, patrones y experimentos que uso en proyectos reales de backend, frontend y DevOps. Todo escrito con
                            foco en acelerar entregas, mejorar performance y dejar una base lista para SEO.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 backdrop-blur"
                                >
                                    <Tag className="h-4 w-4 text-indigo-200" />
                                    {category}
                                </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-[0_14px_44px_-34px_rgba(0,0,0,0.8)] backdrop-blur">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">SEO listo</p>
                                <p className="mt-1 text-sm text-slate-100">Metadatos, portada y descripcion para compartir sin perder click.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-[0_14px_44px_-34px_rgba(0,0,0,0.8)] backdrop-blur">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Aplicable</p>
                                <p className="mt-1 text-sm text-slate-100">Snippets y decisiones que ya uso en clientes y side-projects.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-[0_14px_44px_-34px_rgba(0,0,0,0.8)] backdrop-blur">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">IA & automatizacion</p>
                                <p className="mt-1 text-sm text-slate-100">Cómo integrar IA, bots y pipelines sin romper el delivery.</p>
                            </div>
                        </div>
                    </div>

                    {featured ? (
                        <article
                            className="group relative overflow-hidden rounded-3xl border border-indigo-300/20 bg-gradient-to-br from-indigo-500/15 via-slate-900/70 to-slate-950 p-1 shadow-[0_24px_70px_-44px_rgba(79,70,229,0.6)] backdrop-blur"
                            data-animate="fade-left"
                            style={{ '--delay': '0.08s' }}
                        >
                            <div className="relative h-full rounded-[22px] bg-slate-950/80">
                                <div className="relative h-56 w-full overflow-hidden rounded-t-[22px]">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
                                        {featured.category}
                                    </div>
                                </div>

                                <div className="space-y-4 p-6">
                                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                                        <CalendarClock className="h-4 w-4" />
                                        <span>{featured.date}</span>
                                        <span className="h-1 w-1 rounded-full bg-indigo-300" />
                                        <Clock className="h-4 w-4" />
                                        <span>{featured.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-indigo-100">
                                        {featured.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-200/90">{featured.summary}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {featured.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href={featured.url || '#'}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition-all hover:-translate-y-0.5 hover:text-white"
                                        >
                                            Leer articulo
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-0.5 hover:bg-indigo-400"
                                        >
                                            Colaboremos
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ) : null}
                </div>

                <div className="mt-12 flex items-center justify-between gap-4" data-animate="fade-up" style={{ '--delay': '0.12s' }}>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">Articulos recientes</p>
                        <h3 className="text-2xl font-semibold text-white">Ideas listas para usar en tu stack</h3>
                        <p className="text-sm text-slate-200/80">
                            Backend con Laravel, React y DevOps. Cada nota incluye pasos accionables para tu siguiente release.
                        </p>
                    </div>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                    >
                        Ver proyectos
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {restPosts.map((post, idx) => (
                        <article
                            key={post.id}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_64px_-52px_rgba(0,0,0,0.85)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200/30 hover:shadow-[0_26px_76px_-50px_rgba(99,102,241,0.35)]"
                            data-animate="fade-up"
                            style={{ '--delay': `${0.1 + idx * 0.06}s` }}
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-100">
                                    {post.category}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col space-y-3 p-5">
                                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                                    <span>{post.date}</span>
                                    <span className="h-1 w-1 rounded-full bg-indigo-300" />
                                    <span>{post.readTime}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-white group-hover:text-indigo-100">{post.title}</h4>
                                <p className="flex-1 text-sm leading-relaxed text-slate-200/85">{post.summary}</p>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={post.url || '#'}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition-colors hover:text-white"
                                >
                                    Leer mas
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/20 via-indigo-500/14 to-purple-500/16 p-8 shadow-[0_26px_80px_-50px_rgba(99,102,241,0.55)] backdrop-blur lg:flex-row lg:items-center"
                    data-animate="fade-up"
                    style={{ '--delay': '0.18s' }}
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">Siguientes pasos</p>
                        <h4 className="mt-2 text-xl font-semibold text-white">Quieres profundizar en algun tema?</h4>
                        <p className="mt-1 max-w-2xl text-sm text-slate-200/85">
                            Escribeme y lo convertimos en guia practica para tu equipo o proyecto. Tambien puedo crear un playbook a medida.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1 hover:bg-indigo-400"
                        >
                            Contacto directo
                        </Link>
                        <a
                            href="mailto:yoninfantearce@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:text-white"
                        >
                            yoninfantearce@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
