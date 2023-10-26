import React from 'react';
import { Welcome } from './Welcome';
import { Cardlist } from './Cardlist';
import './main.scss';

function Main() {
  return (
    <main className="maincontent">
      <Welcome />
      <label>
        <input type="checkbox" className="main-edit-checkbox" />
        Открыть режим редактирования
      </label>
      <Cardlist />
    </main>
  );
}
export { Main };
