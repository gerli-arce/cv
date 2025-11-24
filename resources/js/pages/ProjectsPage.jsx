import React from 'react';
import ProjectsSection from '../sections/ProjectsSection';
import Seo from '../components/Seo';
import { projectsSeo } from '../data/portfolioData';

export default function ProjectsPage() {
    return (
        <>
            <Seo {...projectsSeo} />
            <ProjectsSection />
        </>
    );
}
