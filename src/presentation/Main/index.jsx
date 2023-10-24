import React from 'react';
import { Welcome } from './Welcome';
import { Card } from './Card';
import './main.scss';

function Main() {
  return (
    <main className="maincontent">
      <Welcome />
      <Card />
    </main>
  );
}
export { Main };
