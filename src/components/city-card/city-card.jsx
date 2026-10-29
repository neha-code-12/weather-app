import { IoSunny } from "react-icons/io5";

const CityCard = ({title,value,city}) => {
  return (
    <div className="h-56 w-44 rounded-lg overflow-hidden flex flex-col">
      <div className="bg-[#bfd5f0] p-4 flex-1 relative">
        <h4 className="text-lg text-white font-semibold">{title}</h4>
        <span className="text-3xl text-white font-bold">{value}</span>

        <IoSunny className="absolute right-4 bottom-4 text-white" />
      </div>

      <div className="text-center bg-white py-2">{city}</div>
    </div>
  );
};
export default CityCard;
