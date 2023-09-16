const menuButton = () => {
  return (
    <button className="relative group">
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-6 group-focus:ring-3 ring-opacity-30 duration-200 shadow-md">
        <div className="flex flex-col justify-between w-[10px] h-[10px] transform transition-all duration-300 origin-center overflow-hidden">
          <div className="bg-white h-[2px] w-4 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
          <div className="bg-white h-[2px] w-4 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
          <div className="bg-white h-[2px] w-4 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

          <div className="absolute top-[5px] items-center justify-between transform transition-all duration-500 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-6">
            <div className="absolute bg-white h-[2px] w-2.5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
            <div className="absolute bg-white h-[2px] w-2.5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default menuButton;
