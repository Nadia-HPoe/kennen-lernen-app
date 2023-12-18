import React from 'react';

function newCardlist() {
  return (
    <div className="container">
      {/* <label>
            <input
              type="checkbox"
              className="main-edit-checkbox"
              onClick={handleClick}
            />
            Открыть режим редактирования
          </label> */}
      <table className="table-card" border={1}>
        <thead>
          <tr>
            <th className="table-col-0">#</th>
            <th className="table-col">Слово на английском</th>
            <th className="table-col">Перевод</th>
            <th className="table-col-4"></th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
export { newCardlist };
