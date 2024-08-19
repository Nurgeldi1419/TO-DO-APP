"use client";
import { FC, useState } from "react";
// import { useRef } from "react";

interface ModalProps {
  closeModal: (status: boolean) => void;
  onConfirm: (text: string) => void;
}

const Modal: FC<ModalProps> = ({ closeModal, onConfirm }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    onConfirm(inputText);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className=" w-[500px] border h-[289px] bg-white  rounded-2xl font-Katin flex-row p-5">
        <h1 className="text-[#252525] font-medium text-2xl mb-5">New Note</h1>
        <input
          type="text"
          name=""
          placeholder="Input your note..."
          value={inputText}
          onChange={handleInputChange}
          className="w-[440px] border outline-none rounded-[5px] bg-transparent py-2 px-4 ring-[#6C63FF] text-[#C3C1E5] text-[16px] font-Inter"
        />
        <div className="flex justify-between mx-auto mt-[105px] self-end">
          <button
            className="bg-white rounded text-[#6C63FF] border border-[#6C63FF] py-[10px] px-[22px]"
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-[#6C63FF] rounded text-white py-[10px] px-[22px]"
            onClick={handleSubmit}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
