import { CiSearch } from "react-icons/ci";

const Searchbar = ({ setSearchCity }) => {
  return (
    <div className=" bg-[#fff] w-1/2 relative">
      <input
        className=" py-2 px-4 pr-12 w-full"
        type="text"
        placeholder="search city "
        onChange={(e)=>{setSearchCity(e.target.value)}}
      />
      <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 " />
    </div>
  );
};

export default Searchbar;
