const CheckedIcon = () => {
  return (
    <svg
      className='absolute w-5 h-5 pointer-events-none peer-checked:block stroke-white  mt-1 outline-none'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='4'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='20 6 9 17 4 12'></polyline>
    </svg>
  );
};

export default CheckedIcon;
