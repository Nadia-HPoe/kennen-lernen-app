import React from 'react';
import { Card } from './Card';
import { words } from '../components/wordlist';

function Main() {
  const wordList = words.map((word) => (
    <Card key={word.id} german={word.german} russian={word.russian} />
  ));
  return <main className="maincontent">{wordList}</main>;
}
export { Main };
