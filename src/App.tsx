import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [searchInput, setSearch] = useState("");
  const [filterInput, setFilter] = useState("All");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
  const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilter(value);
  };
  return (
    <>
      <div className="p-10">
        <div className="flex items-center flex-col">
          <img
            src="https://assets.website-files.com/62c1627eee0defc3a1256898/62cf234679dbabe18fa50a1e_pokeapi_256%201.svg"
            alt="Poké API logo"
            className="w-48 aspect-video select-none"
          />
        </div>
        <div className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center">
          <input
            type="text"
            value={searchInput}
            onChange={handleChangeSearch}
            className="rounded-2xl text-xl px-2 sm:p-2.5"
            placeholder="Search Pokemon"
          />
          <p className="text-zinc-100 text-balance text-center">
            Use this input to search for any pokemon. In an instant.
          </p>
        </div>
        <div>
          <h2 className="py-3 text-3xl text-center">Pokemons</h2>
          <div className="py-3 flex justify-between">
            <label htmlFor="filter" className="block mr-6 font-medium text-gray-900 text-lg sm:text-2xl">
              Filter:
              <select
                id="filter"
                value={filterInput}
                onChange={handleChangeFilter}
                className="border border-gray-500 text-lg rounded-lg  p-1 sm:p-2.5"
              >
                <option value="All">All</option>
                <option value="Normal">Normal</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Electric">Electric</option>
                <option value="Rock">Rock</option>
                <option value="Grass">Grass</option>
                <option value="Ice">Ice</option>
                <option value="Fighting">Fighting</option>
                <option value="Poison">Poison</option>
                <option value="Ground">Ground</option>
                <option value="Flying">Flying</option>
                <option value="Psychic">Psychic</option>
                <option value="Ghost">Ghost</option>
                <option value="Dragon">Dragon</option>
                <option value="Dark">Dark</option>
                <option value="Steel">Steel</option>
                <option value="Fairy">Fairy</option>
              </select>
            </label>
            <select
              value={filterInput}
              onChange={handleChangeFilter}
              className="border border-gray-500 text-lg rounded-lg  p-1 sm:p-2.5"
            >
              <option value="Dark">Dark</option>
              <option value="Steel">Steel</option>
              <option value="Fairy">Fairy</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
