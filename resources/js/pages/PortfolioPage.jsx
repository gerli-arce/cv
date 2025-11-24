import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import ProjectsPage from './ProjectsPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';

export default function PortfolioPage() {
    const location = useLocation();

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('[data-animate]'));
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
        );

        elements.forEach((el) => {
            el.classList.remove('is-visible');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <Header />

            <main className="flex-1">
                <Routes>
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
