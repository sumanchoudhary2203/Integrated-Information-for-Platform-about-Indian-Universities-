import { City, State } from "country-state-city";
import { useEffect, useState } from "react";
import Selector from "./Selector";
import { useNavigate } from "react-router-dom";

const StateCitySelector = () => {
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry("IN")); // Assuming "IN" for India
  }, []);

  useEffect(() => {
    if (state) {
      setCityData(City.getCitiesOfState("IN", state?.isoCode));
    }
  }, [state]);

  useEffect(() => {
    if (stateData.length) setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    if (cityData.length) setCity(cityData[0]);
  }, [cityData]);
  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log("Selected State:", state);
    console.log("Selected City:", city);
    navigate(`/${state.name}/${city.name}`)
  };

  return (
    <section className="  flex  gap-4 p-4  rounded-md shadow-lg max-w-xs ml-[120px] mt-14 ">
      <div className="flex gap-3 ">
        <p className="font-bold text-orange-400 mt-2">State:</p>
        {state && (
          <Selector data={stateData} selected={state} setSelected={setState} />
        )}
      </div>

      <div className="flex text-center gap-3">
        <p className="font-bold text-orange-400 mt-2">City:</p>
        {city && (
          <Selector data={cityData} selected={city} setSelected={setCity} />
        )}
      </div>

      <button
        className=" p-2 bg-gray-500 text-white font-bold rounded-md "

        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default StateCitySelector;
