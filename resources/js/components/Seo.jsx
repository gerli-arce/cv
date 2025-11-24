import { useEffect } from 'react';

function updateMetaTag(key, value, attr = 'name') {
    if (!value) return;
    const selector = `${attr}="${key}"`;
    let tag = document.head.querySelector(`meta[${selector}]`);

    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }

    tag.setAttribute('content', value);
}

export default function Seo({ title, description, image, url, type = 'website' }) {
    useEffect(() => {
        const resolvedUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
        const resolvedImage = image || '';

        if (title) {
            document.title = title;
        }

        updateMetaTag('description', description);
        updateMetaTag('og:title', title, 'property');
        updateMetaTag('og:description', description, 'property');
        updateMetaTag('og:image', resolvedImage, 'property');
        updateMetaTag('og:type', type, 'property');
        updateMetaTag('og:url', resolvedUrl, 'property');
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', resolvedImage);
    }, [title, description, image, url, type]);

    return null;
}
