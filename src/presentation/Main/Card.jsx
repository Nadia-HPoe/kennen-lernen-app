import React from 'react';
import { words } from '../components/wordlist';
import { SaveImg } from './images/square-check-solid.svg';
import { EditImg } from './images/pencil-solid.svg';
import { DeleteImg } from './images/trash-solid.svg';

function Card() {
  return (
    <table className="table-card" border={1}>
      <thead>
        <tr>
          <th className="table-col-0">#</th>
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
              <th>
                <button className="table-save">
                  <img src={SaveImg} alt="save" />
                  Save
                </button>
                <button className="table-edit">
                  <img src={EditImg} alt="edit" />
                </button>
                <button className="table-delete">
                  <img src={DeleteImg} alt="delete" />
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
