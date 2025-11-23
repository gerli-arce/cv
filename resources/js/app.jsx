import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import PortfolioPage from './pages/PortfolioPage';

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <PortfolioPage />
        </React.StrictMode>,
    );
}
