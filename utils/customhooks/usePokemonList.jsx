import { useEffect, useState } from "react";
import { POKEMON_API } from "../constants";

const usePokemonList = () => {
  const [url, setUrl] = useState(POKEMON_API);
  const [loading, setLoading] = useState(true);
  const [listOfPokemon, setListOfPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [search, setSearch] = useState("bulbasaur");

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();

    const pokemonList = json?.results || [];

    getPokemon(pokemonList);
    setFilteredPokemon(pokemonList);
    setNextUrl(json?.next);
    setPrevUrl(json?.previous);
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearch = async () => {
    try{
      const response = await fetch(POKEMON_API + "/" +search.toLowerCase());
      const json = await response.json();
      
      setFilteredPokemon(json);
    } catch (error) {
      setFilteredPokemon([]);
      console.error("Error fetching data: The pokemon you are looking for does not exist.");
    }
    
  };

  const getPokemon = async (pokemonList) => {
    pokemonList.map(async (pokemon) => {
      const response = await fetch(pokemon?.url);
      const json = await response.json();

      setListOfPokemon((state) => {
        const isDuplicate = state.some((item) => item.id === json.id);
        if (!isDuplicate) {
          const newState = [...state, json];
          newState.sort((a, b) => (a.id > b.id ? 1 : -1));
          return newState;
        }
        return state;
      });
    });
  };

  return {
    listOfPokemon,
    filteredPokemon,
    nextUrl,
    prevUrl,
    loading,
    setListOfPokemon,
    setFilteredPokemon,
    setUrl,
    setSearch
  };
};

export default usePokemonList;
