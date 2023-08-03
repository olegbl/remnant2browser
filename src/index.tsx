import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Scraper from './Scraper';

const container = document.getElementById('root');
const root = createRoot(container!);

if (window.location.href.includes('scraper=true')) {
  // ReactDOM.render(<Scraper />, document.getElementById('root'));
  root.render(<Scraper />);
} else {
  // ReactDOM.render(<App />, document.getElementById('root'));
  root.render(<App />);
}
