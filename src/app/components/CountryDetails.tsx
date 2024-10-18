import React from 'react'
import { CountryInfo } from '../../../types/PropsTypes'

const CountryDetails = (props:CountryInfo) => {
  return (
    <div>   <h1 className="text-5xl font-bold m-3">Country Information</h1>
       
    <h2 className="text-2xl font-bold m-2">Country Name: {props.countryName}</h2>

    <h2 className="text-2xl font-bold m-3">Country Capital: {props.capital}</h2>

    <h2 className="text-2xl font-bold">Country Population: {props.population}</h2></div>
  )
}

export default CountryDetails