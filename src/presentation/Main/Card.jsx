import React from 'react';
import { words } from '../components/wordlist';
import { Icons } from './components';
function Card() {
  return (
    <table className="table-card" border={1}>
      <thead>
        <tr>
          <th className="table-col-0">#</th>
          <th className="table-col">Слово на немецком</th>
          <th className="table-col">Перевод</th>
          <th className="table-col-4"></th>
        </tr>
      </thead>
      <tbody>
        {words.map(function (word, id) {
          return (
            <tr key={id}>
              <th>{1 + id}</th>
              <th>{word.german}</th>
              <th>{word.russian}</th>
              <th className="table-buttons">
                <button className="table-save">
                  Save
                  <Icons name="square" color="#fff" size="22" />
                </button>
                <button className="table-edit">
                  <Icons name="pencil" color="#fff" size="20" />
                </button>
                <button className="table-delete">
                  <Icons name="trash" color="#fff" size="20" />
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export { Card };
