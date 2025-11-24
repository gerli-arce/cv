import React from 'react';
import ContactSection from '../sections/ContactSection';
import Seo from '../components/Seo';
import { contactSeo } from '../data/portfolioData';

export default function ContactPage() {
    return (
        <>
            <Seo {...contactSeo} />
            <ContactSection />
        </>
    );
}
