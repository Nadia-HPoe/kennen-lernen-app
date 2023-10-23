import React from 'react';

function Card(props) {
  const { id, german, russian } = props;
  return (
    <div className="App">
      <table className="table-card">
        <thead>
          <td>#</td>
          <td>{id}</td>
        </thead>
        <thead>
          <td>Слово на немецком</td>
          <td>{german}</td>
        </thead>
        <thead>
          <td>Перевод</td>
          <td>{russian}</td>
        </thead>
      </table>
    </div>
  );
}
export { Card };
