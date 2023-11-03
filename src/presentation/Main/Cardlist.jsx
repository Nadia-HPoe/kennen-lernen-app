import React, { useState } from 'react';
import { words } from '../components/wordlist';
import { EditButton } from './components/EditButton';
import { SaveButton } from './components/SaveButton';
import { DeleteButton } from './components/DeleteButton';

function Cardlist() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [editingIndex, setEditingIndex] = useState(null);
  // Хук состояния для временного списка слов
  const [tempWords, setTempWords] = useState(words);

  // Обработчик для начала редактирования
  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  // Обработчик для сохранения изменений
  const handleSave = (index) => {
    setEditingIndex(null);
    words[index] = tempWords[index];
  };

  // Обработчик для отмены редактирования
  const handleCancel = (index) => {
    setEditingIndex(null);
    const updatedWords = [...tempWords];
    updatedWords[index] = { ...words[index] };
    setTempWords(updatedWords);
  };

  // Обработчик изменений в инпуте редактирования
  const handleChange = (index, key, value) => {
    const updatedWords = [...tempWords];
    updatedWords[index][key] = value;
    setTempWords(updatedWords);
  };

  return (
    <div className="container">
      <label>
        <input
          type="checkbox"
          className="main-edit-checkbox"
          onClick={handleClick}
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
          {tempWords.map((word, id) => (
            <tr key={id}>
              <th className="table-row">{1 + id}</th>
              <th className="table-row">
                {/* Если строка редактируется, отображаем инпут, иначе - текст */}
                {editingIndex === id ? (
                  <input
                    value={word.german}
                    onChange={(e) => handleChange(id, 'german', e.target.value)}
                  />
                ) : (
                  word.german
                )}
              </th>
              <th className="table-row">
                {editingIndex === id ? (
                  <input
                    value={word.russian}
                    onChange={(e) =>
                      handleChange(id, 'russian', e.target.value)
                    }
                  />
                ) : (
                  word.russian
                )}
              </th>

              <th className={'table-buttons ' + (clicked ? '' : 'hidden')}>
                {editingIndex === id ? (
                  <>
                    <SaveButton onClick={() => handleSave(id)} />
                    <DeleteButton onClick={() => handleCancel(id)} />
                  </>
                ) : (
                  <>
                    <EditButton onClick={() => handleEdit(id)} />
                  </>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export { Cardlist };
