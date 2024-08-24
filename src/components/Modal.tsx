import { FC, useState, KeyboardEvent, useEffect } from 'react';

interface ModalProps {
  setModalOpen: (status: boolean) => void;
  onConfirm: (text: string, id: string) => void;
}

const Modal: FC<ModalProps> = ({ setModalOpen, onConfirm }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    const newItemId = Date.now().toString();
    if (inputText) {
      onConfirm(inputText, newItemId);
      setModalOpen(false);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape as unknown as EventListener
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape as unknown as EventListener
      );
    };
  }, [setModalOpen]);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center'>
      <div className='w-[500px] border h-[289px] bg-white rounded-2xl p-5'>
        <h1 className='text-[#252525] font-medium text-2xl mb-5'>New Note</h1>
        <input
          type='text'
          placeholder='Input your note...'
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className='w-[440px] border outline-none rounded-[5px] bg-transparent py-2 px-4 ring-[#6C63FF] text-[#252525] text-[16px]'
        />
        <div className='flex justify-between mt-[105px]'>
          <button
            className='bg-white rounded text-[#6C63FF] border border-[#6C63FF] py-[10px] px-[22px]'
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className='bg-[#6C63FF] rounded text-white py-[10px] px-[22px]'
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
