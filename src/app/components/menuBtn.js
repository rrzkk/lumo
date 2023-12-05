const menuButton = ({ onClick }) => {
  return (
    <button
      className="relative"
      onClick={onClick}
      style={{ zIndex: "2147483647" }}
    >
      <div className="flex items-center justify-center rounded-full w-[30px] h-[30px] bg-slate-700 shadow-md">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="bg-white h-[2px] w-4 mb-[4px]"></div>
          <div className="bg-white h-[2px] w-4 mb-[4px]"></div>
          <div className="bg-white h-[2px] w-4"></div>
        </div>
      </div>
    </button>
  );
};

export default menuButton;
