import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './assets/styles/global.scss';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
