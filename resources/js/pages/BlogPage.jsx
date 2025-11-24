import React from 'react';
import BlogSection from '../sections/BlogSection';
import Seo from '../components/Seo';
import { blogSeo } from '../data/portfolioData';

export default function BlogPage() {
    return (
        <>
            <Seo {...blogSeo} />
            <BlogSection />
        </>
    );
}
