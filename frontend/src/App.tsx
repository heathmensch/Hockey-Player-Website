import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { PlayerSearch } from './player';
import { searchPlayers } from './api';

function App() {
    const [search, setSearch] = useState<string>(""); // Explicit type string
    const [searchResult, setSearchResult] = useState<PlayerSearch[]>([]); // Explicit type any
    const [serverError, setServerError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    };

    const onClick = async (e: SyntheticEvent) => {
      const result = await searchPlayers(search);
      if(typeof result === 'string'){
        setServerError(result);
      } else if(Array.isArray(result)){
        setSearchResult(result);
      }
    };
  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList searchResult={searchResult} />
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
