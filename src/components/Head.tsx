import { FC, useState, useEffect } from "react";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";

interface HeadProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setFilter: (setFilter: string) => void;
}

const Head: FC<HeadProps> = ({ searchTerm, setSearchTerm, setFilter }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme ||
      (window.matchMedia("prefer-color-schema: dark").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleDropDown = () => {
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

  /* change background color */

  // useEffect(() => {
  //   document.body.style.backgroundColor = backgroundColor;
  // }, [backgroundColor]);

  return (
    <section className="min-w-[800px] font-Katin h-52">
      <h1 className="font-medium my-2 text-[26px]">TO DO LIST</h1>
      <form className="flex gap-[10px] justify-between">
        <div className="flex gap-[10px]">
          <label htmlFor="note" className="sr-only">
            Search
          </label>
          <div className="flex px-4 py-3 h-[38px] rounded-md border border-[#6C63FF] overflow-hidden w-[595px] mx-auto">
            <input
              type="text"
              placeholder="Search note..."
              value={searchTerm}
              onChange={handleSearchTerm}
              className="w-full outline-none bg-transparent text-[#C3C1E5] text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-[#6C63FF]"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
          <div className="relative inline-block text-left w-[160px] ">
            <button
              className="bg-[#6C63FF] text-[#F7F7F7] rounded-[5px] p-[5px] w-[160px] h-[38px] text-[18px] leading-none"
              type="button"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={handleDropDown}
            >
              <span className="align-top">{selectedFilter.toUpperCase()}</span>
              <svg
                className="w-2.5 h-2.5 ms-3 inline"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="origin-top-right w-[160px] rounded-[5px] shadow-lg bg-white ring-1 ring-[#6C63FF] ring-opacity-5 text-center">
                <ul
                  className=""
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <li
                    className="block px-1 py-2 text-sm text-[#6C63FF] hover:bg-[#6C63FF33] hover:cursor-pointer"
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleClick("all")}
                  >
                    All
                  </li>
                  <li
                    className="block px-1 py-2 text-sm text-[#6C63FF] hover:bg-[#6C63FF33] hover:cursor-pointer"
                    role="menuitem"
                    tabIndex={1}
                    onClick={() => handleClick("complete")}
                  >
                    Complete
                  </li>
                  <li
                    className="block px-1 py-2 text-sm text-[#6C63FF] hover:bg-[#6C63FF33] hover:cursor-pointer"
                    role="menuitem"
                    tabIndex={-1}
                    onClick={() => handleClick("uncomplete")}
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
          className="bg-[#6C63FF] w-[38px] h-[38px] flex justify-center items-center rounded-[5px]"
        >
          <img src={theme === "dark" ? Sun : Moon} alt="fff" />
        </button>
      </form>
    </section>
  );
};

export default Head;
