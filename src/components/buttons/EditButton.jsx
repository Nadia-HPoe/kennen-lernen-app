import React from 'react';
import { Icons } from '../icons/Icons';

function EditButton({ onClick }) {
  return (
    <button className="table-edit" onClick={onClick}>
      Редактировать
      <Icons name="pencil" color="#fff" size="20" />
    </button>
  );
}
export { EditButton };
