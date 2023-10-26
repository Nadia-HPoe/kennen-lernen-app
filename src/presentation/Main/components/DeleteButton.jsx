import React from 'react';
import { Icons } from '.';

function DeleteButton() {
  return (
    <button className="table-delete">
      <Icons name="trash" color="#fff" size="20" />
    </button>
  );
}
export { DeleteButton };
