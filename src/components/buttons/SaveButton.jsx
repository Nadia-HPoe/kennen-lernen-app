import React from 'react';
import { Icons } from '../icons/Icons';

function SaveButton({ onClick, isBlocked }) {
  return (
    <button className="table-save" onClick={onClick} disabled={isBlocked}>
      <Icons name="square" color="#fff" size="22" />
    </button>
  );
}
export { SaveButton };
