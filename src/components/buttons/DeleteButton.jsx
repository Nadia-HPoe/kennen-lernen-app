import React from 'react';
import { Icons } from '../icons/Icons';

function DeleteButton({ onClick }) {
  return (
    <button className="table-delete" onClick={onClick}>
      <Icons name="cross" color="#fff" size="22" />
    </button>
  );
}
export { DeleteButton };
