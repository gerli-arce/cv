import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../css/app.css';
import PortfolioPage from './pages/PortfolioPage';

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <PortfolioPage />
            </BrowserRouter>
        </React.StrictMode>,
    );
}

// Animaciones de aparición al hacer scroll
// La lógica de aparición se maneja en PortfolioPage.
