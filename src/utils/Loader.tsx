const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="relative w-16 h-16 animate-spin  rounded-full bg-gradient-to-r from-lime-500 via-indigo-700 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] bg-white rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
};

export default Loader;
