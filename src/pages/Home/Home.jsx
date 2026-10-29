import { useState } from "react";
import Searchbar from "../../components/search-bar/search-bar";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");

  return (
    <div className="w-screen h-screen bg-[#9cacd8] p-12 ">
      <Searchbar setSearchCity={setSearchCity}/>
    </div>
  );
};

export default Home;
