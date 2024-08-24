import { FC, useState } from 'react';
import emptyCheck from '../assets/Detective-check-footprint 1.png';
import AddButton from '../assets/AddButton.png';
import Modal from './Modal';
import DeleteButton from '../assets/trash-svgrepo.png';
import { ListItem } from '../types/listItem';
import { useLocalStorage } from '../hooks/useLocalStorage';
import CheckedIcon from './Icons/CheckedIcon';

interface MainProps {
  searchTerm: string;
  filter: string;
}

const Main: FC<MainProps> = ({ searchTerm, filter }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const { handleSubmitText, handleCheckUncheck, handleDeleteItem, textList } =
    useLocalStorage();

  const filteredList = textList.filter((item: ListItem) => {
    const matchesSearch = item.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filter === 'all') {
      return matchesSearch;
    } else if (filter === 'complete') {
      return matchesSearch && item.isChecked;
    } else if (filter === 'uncomplete') {
      return matchesSearch && !item.isChecked;
    }
    return false;
  });

  return (
    <div className='flex flex-row justify-center items-center w-[800px] relative font-Katin'>
      <div className='w-[520px] text-center h-[545px] '>
        {textList.length > 0 ? (
          <div className='w-full h-full text-xl'>
            {filteredList.map((item: ListItem) => (
              <li
                key={item.id}
                className='text-left py-4 w-full flex gap-2 border-b border-[#6C63FF] cursor-pointer list-none'
              >
                <input
                  type='checkbox'
                  checked={item.isChecked}
                  onChange={() => handleCheckUncheck(item.id)}
                  className='relative peer shrink-0 appearance-none w-5 h-5 border-2 border-[#6C63FF] rounded-sm bg-white mt-1 
                  checked:bg-[#0f0e14] checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 
                  disabled:border-steel-400 disabled:bg-steel-400'
                />
                <CheckedIcon />
                <label htmlFor='' className='ml-2 text-xl'>
                  <span
                    className={
                      item.isChecked
                        ? 'line-through text-[#45454580] font-normal leading-5'
                        : ''
                    }
                  >
                    {item.text}
                  </span>
                </label>
                <button
                  className='bg-white hover:bg-[#e5383b] text-white rounded-full px-2 py-1 ml-auto'
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <img src={DeleteButton} alt='delete button logo' />
                </button>
              </li>
            ))}
          </div>
        ) : (
          <div>
            <img src={emptyCheck} alt='empty image' className='mx-auto' />
            <p>Empty...</p>
          </div>
        )}
      </div>
      <button
        className='bg-[#6C63FF] absolute bottom-0 right-0 text-[#F7F7F7] rounded-full w-[50px] h-[50px] text-[24px] flex justify-center items-center'
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <img
          src={AddButton}
          alt='add button icon'
          className='object-scale-down'
        />
      </button>
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen} onConfirm={handleSubmitText} />
      )}
    </div>
  );
};

export default Main;
