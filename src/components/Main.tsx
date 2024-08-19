import { useState, FC } from "react";
import emptyCheck from "../assets/Detective-check-footprint 1.png";
import AddButton from "../assets/AddButton.png";
import Modal from "./Modal";

interface MainProps {
  text: string;
  isChecked: boolean;
}

interface ListItem {
  text: string;
  isChecked: boolean;
}

const Main: FC<MainProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // const [hasContent, setHasContent] = useState(false);

  const [textList, setTextList] = useState<ListItem[]>([]);

  const handleSubmitText = (text: string) => {
    setTextList([...textList, { text, isChecked: false }]);
  };

  const handleCheckUncheck = (index: number) => {
    const updatedItems = [...textList];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    setTextList(updatedItems);
  };

  return (
    <div className="flex flex-row justify-center w-[750px] relative font-Katin">
      <div className="w-[520px] text-center h-[545px] ">
        {textList.length > 0 ? (
          <div className="w-full h-full text-xl">
            {textList.map((item, index) => (
              <li
                key={index}
                className="text-left py-4 w-full flex gap-2 border-b border-[#6C63FF] cursor-pointer list-none"
              >
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => handleCheckUncheck(index)}
                  className="relative peer shrink-0 appearance-none w-5 h-5 border-2 border-[#6C63FF] rounded-sm bg-white mt-1 
                  checked:bg-[#6C63FF] checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 
                  disabled:border-steel-400 disabled:bg-steel-400  "
                />
                <svg
                  className="absolute w-5 h-5 pointer-events-none hidden peer-checked:block stroke-white  mt-1 outline-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <label htmlFor="" className="ml-2 text-xl">
                  <span
                    className={
                      item.isChecked
                        ? "line-through text-[#25252580] font-normal leading-5"
                        : ""
                    }
                  >
                    {item.text}
                  </span>
                </label>
              </li>
            ))}
          </div>
        ) : (
          <div>
            <img src={emptyCheck} alt="fff" className="mx-auto" />
            <p>Empty...</p>
          </div>
        )}
      </div>
      <button
        className="bg-[#6C63FF] absolute bottom-0 right-0 text-[#F7F7F7] rounded-full w-[50px] h-[50px] text-[24px] flex justify-center items-center"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <img src={AddButton} alt="fff" className="object-scale-down" />
      </button>
      {openModal && (
        <Modal closeModal={setOpenModal} onConfirm={handleSubmitText} />
      )}
    </div>
  );
};

export default Main;
