import React from 'react';
import { words } from '../components/wordlist';

function Card() {
  return (
    <table className="table-card" border={1}>
      <thead>
        <tr>
          <th className="table-col">#</th>
          <th className="table-col">Слово на немецком</th>
          <th className="table-col">Перевод</th>
          <th className="table-col"></th>
        </tr>
      </thead>
      <tbody>
        {words.map(function (word, id) {
          return (
            <tr key={id}>
              <th>{1 + id}</th>
              <th>{word.german}</th>
              <th>{word.russian}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export { Card };
