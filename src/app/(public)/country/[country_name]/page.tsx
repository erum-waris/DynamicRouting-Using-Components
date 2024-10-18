import React from "react";
import { CountryInfo } from "../../../../../types/PropsTypes";
import CountryDetails from "@/app/components/CountryDetails";

const Countries:CountryInfo[] = [
  { countryName: "pakistan", population:25000000000, capital:"Islamabad"},
  { countryName: "usa", population: 331002651, capital: "Washington D.C." },
  { countryName: "india", population: 1380004385, capital: "New Delhi" },
  { countryName: "china", population: 1439323776, capital: "Beijing" },
  { countryName: "japan", population: 126476461, capital: "Tokyo" },
 
  

];

export default  function CountryName({ params }: { params: { country_name: string } }) {

  <h1>Country List will be shown here</h1>
      const findCountry = Countries.find(
        (myFavCountry) => myFavCountry.countryName.toLowerCase() === params.country_name
      );
      if (!findCountry) {
        return <h1>Country not found</h1>;
      }
      return (
        <div className="bg-slate-300 border-3 p-5 flex flex-col items-center" >

       <CountryDetails
        countryName={findCountry.countryName}
         population={findCountry.population}
         capital={findCountry.capital} />
        </div>
      );
    }
    


