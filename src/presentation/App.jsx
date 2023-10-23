import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Card } from './Main/Card';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Card />
      <Footer />
    </div>
  );
}

export { App };
