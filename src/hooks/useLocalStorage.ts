import { useState } from 'react';
import { ListItem } from '../types/listItem';

export const useLocalStorage = () => {
  const getLocalStorageValue = JSON.parse(
    localStorage.getItem('textList') || '[]'
  );
  const [textList, setTextList] = useState<ListItem[]>(getLocalStorageValue);

  const handleSubmitText = (text: string, id: string) => {
    const newTextList = [...textList, { text, isChecked: false, id }];
    localStorage.setItem('textList', JSON.stringify(newTextList));
    setTextList(newTextList);
  };

  const handleCheckUncheck = (id: string) => {
    const updatedItems = textList.map((item: ListItem) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    localStorage.setItem('textList', JSON.stringify(updatedItems));
    setTextList(updatedItems);
  };

  const handleDeleteItem = (id: string) => {
    const updatedList = textList.filter((item: ListItem) => item.id !== id);
    localStorage.setItem('textList', JSON.stringify(updatedList));

    setTextList(updatedList);
  };

  return {
    handleSubmitText,
    handleCheckUncheck,
    handleDeleteItem,
    textList,
  };
};
