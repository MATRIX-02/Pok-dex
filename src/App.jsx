import { useEffect, useState } from "react";
import "./App.css";
import usePokemonList from "../utils/customhooks/usePokemonList";
import Search from "./component/Search";
import Card from "./component/Card";
import Pokeinfo from "./component/Pokeinfo";

const App = () => {
  const {
    listOfPokemon,
    filteredPokemon,
    nextUrl,
    prevUrl,
    loading,
    setListOfPokemon,
    setFilteredPokemon,
    setUrl,
    setSearch
  } = usePokemonList();


  return (
    <div className=" w-screen h-scren flex flex-col justify-center p-5">
      <h1 className="text-4xl font-extrabold text-yellow-400 p-4">
        P<span className="text-red-500">o</span>kém
        <span className="text-red-500">o</span>n
      </h1>
      <div className="flex justify-between mx-5 mt-20">
        <div className=" w-1/2">
          <div className="flex flex-wrap">
            <Card pokemon={listOfPokemon} loading={loading} />
          </div>
          <div className="w-full flex justify-between mt-5">
            {prevUrl && (
              <button
                className="p-3 w-20 flex justify-center border-2 border-gray-400 rounded-md"
                onClick={() => {
                  setListOfPokemon([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                className="p-3 w-20 flex justify-center border-2 border-gray-400 rounded-md"
                onClick={() => {
                  setListOfPokemon([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <Search setSearch={setSearch} />
          <Pokeinfo data={filteredPokemon} />
        </div>
      </div>
    </div>
  );
};

export default App;
