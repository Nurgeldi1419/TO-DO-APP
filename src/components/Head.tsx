import { useState, useEffect, FC } from 'react';
import Moon from '../assets/moon.png';
import Sun from '../assets/sun.png';
import SearchIcon from './Icons/SearchIcon';
import ArrowDownIcon from './Icons/ArrowDownIcon';
import { storedTheme } from '../utils/getTheme';

interface HeadProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setFilter: (setFilter: string) => void;
}

const Head: FC<HeadProps> = ({ searchTerm, setSearchTerm, setFilter }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    if (theme) localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  const handleDropdown = () => {
    setOpen(!isOpen);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const handleSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (filter: string) => {
    setFilter(filter);
    closeDropdown();
    setSelectedFilter(filter);
  };

  return (
    <section className='min-w-[800px] font-Katin h-52'>
      <h1 className='font-medium my-2 text-[26px]'>TO DO LIST</h1>
      <div className='flex gap-[10px] justify-between'>
        <div className='flex gap-[10px]'>
          <label htmlFor='note' className='sr-only'>
            Search
          </label>
          <div className='flex px-4 py-3 h-[38px] rounded-md border border-[#6C63FF] overflow-hidden w-[595px] mx-auto'>
            <input
              type='text'
              placeholder='Search note...'
              value={searchTerm}
              onChange={handleSearchTerm}
              className='w-full outline-none bg-transparent text-[#C3C1E5] text-sm'
            />
            <SearchIcon />
          </div>
          <div className='relative inline-block text-left w-[160px] '>
            <button
              className='bg-[#6C63FF] text-[#F7F7F7] rounded-[5px] p-[5px] w-[160px] h-[38px] text-[18px] leading-none'
              type='button'
              id='options-menu'
              aria-haspopup='true'
              aria-expanded={isOpen}
              onClick={handleDropdown}
            >
              <span className='align-top'>{selectedFilter.toUpperCase()}</span>
              <ArrowDownIcon />
            </button>

            {isOpen && (
              <div className='origin-top-right w-[160px] rounded-[5px] shadow-lg bg-white ring-1 ring-[#6C63FF] ring-opacity-5 text-center'>
                <ul
                  className=''
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='options-menu'
                >
                  <li
                    className='block px-1 py-2 text-sm text-[#6C63FF] hover:bg-[#6C63FF33] hover:cursor-pointer'
                    role='menuitem'
                    tabIndex={0}
                    onClick={() => handleClick('all')}
                  >
                    All
                  </li>
                  <li
                    className='block px-1 py-2 text-sm text-[#6C63FF] hover:bg-[#6C63FF33] hover:cursor-pointer'
                    role='menuitem'
                    tabIndex={1}
                    onClick={() => handleClick('complete')}
                  >
                    Complete
                  </li>
                  <li
                    className='block px-1 py-2 text-sm text-[#6C63FF] hover:bg-[#6C63FF33] hover:cursor-pointer'
                    role='menuitem'
                    tabIndex={-1}
                    onClick={() => handleClick('uncomplete')}
                  >
                    Uncomplete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleThemeSwitch}
          className='bg-[#6C63FF] w-[38px] h-[38px] flex justify-center items-center rounded-[5px]'
        >
          <img src={theme === 'dark' ? Sun : Moon} alt='fff' />
        </button>
      </div>
    </section>
  );
};

export default Head;
