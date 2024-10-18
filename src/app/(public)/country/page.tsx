import List from "@/app/components/NavList";
import React from "react";

function CountryList() {
  return (
    <div className="min-h-screen text-center bg-black border-2 p-4 font-bold font-serif text-xl md:text-2xl text-cyan-200">
      <h1 className="bg-slate-300 text-blue-900 hover:bg-green-300 mb-6 text-center text-2xl ">Countries List</h1>
 
        <List href="/country/pakistan" title="pakistan" />
        <br />
        <List href="/country/usa" title="usa" />
        <br />
        <List href="/country/china" title="china" />
        <br />
        <List href="/country/india" title="india" />
        <br />
        <List href="/country/japan" title="japan" />
   
    </div>
  );
}

export default CountryList;