import React from 'react';
import { Icons } from '.';

function SaveButton({ onClick }) {
  return (
    <button className="table-save" onClick={onClick}>
      <Icons name="square" color="#fff" size="22" />
    </button>
  );
}
export { SaveButton };
