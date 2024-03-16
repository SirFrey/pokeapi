import { ChangeEvent, useEffect, useMemo, useState } from "react";
import PokeCard from "./components/pokeCard";
import { useDebounce } from "@uidotdev/usehooks";

function App() {
  // setting initials inputs and pokeData
  const [pokeData, setPokeData] = useState([]);
  const [searchInput, setSearch] = useState("");
  const [inputSearchType, setTypeSearchInput] = useState("text");
  const [filterInput, setFilterInput] = useState("name");
  const debouncedSearchInput = useDebounce(searchInput, 300);
  useEffect(() => {
    getPokemon();
  }, []);

  let filteredPokeData = useMemo(() => {
    return pokeData.filter(({ name }: { name: string }) =>
      name.includes(debouncedSearchInput),
    );
  }, [debouncedSearchInput, pokeData]);

  // getting general data from the api
  const getPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=890");
    const pokeData = await res.json();
    const pokemonList = await pokeData.results;

    setPokeData(pokemonList);
    console.log(pokemonList);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
  const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterInput(value);
    setTypeSearchInput(value);
  };
  return (
    <>
      <div className="px-10">
        <div className="flex items-center flex-col">
          <img
            src="https://assets.website-files.com/62c1627eee0defc3a1256898/62cf234679dbabe18fa50a1e_pokeapi_256%201.svg"
            alt="Poké API logo"
            className="w-48 aspect-video select-none"
          />
        </div>
        <div className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center">
          <div className="flex flex-row gap-3">
            <input
              type={inputSearchType}
              value={searchInput}
              onChange={handleChangeSearch}
              className="w-40 rounded-2xl text-xl px-2 sm:p-2.5"
              placeholder="Search Pokemon"
            />
            <label
              htmlFor="filter"
              className="block mr-6 font-medium text-white text-lg sm:text-2xl"
            >
              Filter by:
              <select
                id="filter"
                value={filterInput}
                onChange={handleChangeFilter}
                className="border ml-2 border-gray-500 text-black text-lg rounded-lg  p-1 sm:p-2.5"
              >
                <option value="id">Name</option>
                <option value="weight">Weight</option>
                <option value="id">ID</option>
              </select>
            </label>
          </div>
          <p className="text-zinc-100 text-balance text-center">
            Use this input to search for any pokemon. In an instant.
          </p>
        </div>
        <div>
          <div>
            <h2 className="py-3 text-3xl text-center">Pokemons</h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(150px,200px))] justify-center gap-4">
              {filteredPokeData.map((pokemon, index) => {
                const pokemonUrl = new URL(pokemon.url);
                const id = pokemonUrl.pathname.split("/")[4];
                let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                return (
                  <PokeCard
                    key={pokemon.name}
                    name={pokemon.name}
                    id={id}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
