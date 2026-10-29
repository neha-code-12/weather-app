import { useState } from "react";
import Searchbar from "../../components/search-bar/search-bar";
import CityCard from "../../components/city-card/city-card";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");

  return (
    <div className="w-screen h-screen bg-[#9cacd8] p-12 flex flex-col gap-6">
      <Searchbar setSearchCity={setSearchCity} />

      <div className="flex gap-4">
        <CityCard title={"Tempeartur"} value={"36 F"} city={"Jamshedpur"} />
        <CityCard title={"Humidity"} value={"56%"} city={"Jamshedpur"} />
        <CityCard title={"wind speed"} value={"20 mph"} city={"Jamshedpur"} />
      </div>
    </div>
  );
};

export default Home;
