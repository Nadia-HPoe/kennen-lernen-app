import React from 'react';
import { Welcome } from './Welcome';
import { Cardlist } from './Cardlist';
import './main.scss';

function Main() {
  return (
    <main className="maincontent">
      <Welcome />
      <Cardlist />
    </main>
  );
}
export { Main };
