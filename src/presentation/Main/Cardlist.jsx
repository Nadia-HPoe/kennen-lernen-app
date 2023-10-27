import React, { useState } from 'react';
import { words } from '../components/wordlist';
import { EditButton } from './components/EditButton';
import { SaveButton } from './components/SaveButton';
import { DeleteButton } from './components/DeleteButton';

function Cardlist() {
  const [clicked, setClicked] = useState(false);
  const handleChange = () => {
    setClicked(!clicked);
  };
  return (
    <div className="container">
      <label>
        <input
          type="checkbox"
          className="main-edit-checkbox"
          onClick={handleChange}
        />
        Открыть режим редактирования
      </label>
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

                <th className={'table-buttons ' + (clicked ? '' : 'hidden')}>
                  <SaveButton />
                  <EditButton />
                  <DeleteButton />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export { Cardlist };
