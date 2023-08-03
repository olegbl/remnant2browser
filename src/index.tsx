import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Scraper from './Scraper';

const container = document.getElementById('root');
const root = createRoot(container!);

if (window.location.href.includes('scraper=true')) {
  root.render(<Scraper />);
} else {
  root.render(<App />);
}
