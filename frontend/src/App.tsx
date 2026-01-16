import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { PlayerSearch } from './player';
import { searchPlayers } from './api';
import { List } from 'lucide-react';
import ListPlayer from './Components/Player/ListPlayer/ListPlayer';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
    const [firstName, setFirstName] = useState<string>(""); // Explicit type string
    const [lastName, setLastName] = useState<string>(""); // Explicit type string
    const [searchResult, setSearchResult] = useState<PlayerSearch[]>([]); // Explicit type any
    const [serverError, setServerError] = useState<string>("");
    const [playerValues, setPlayerValues] = useState<string[]>([]);


    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const onPlayerCreate = (e: any) => {
      e.preventDefault();
      const exists = playerValues.find((value) => value === e.target[0].value);
      if (exists) {
        return;
      }
      // Append the new player values to the playerValues array
      const updatedPlayer = [...playerValues, e.target[0].value];
      setPlayerValues(updatedPlayer);
    };

    const onPlayerDelete = (e: any) => {
      e.preventDefault();
      const removed = playerValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPlayerValues(removed);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      setServerError(""); // Clear previous errors

      // Input validation for first and last name
       if (!firstName.trim() || !lastName.trim()) {
        setServerError("Please enter both first and last name");
        return;
      }

      // Call and set the appropriate state based on the searchPlayers result
      const result = await searchPlayers(firstName, lastName);
      if(typeof result === 'string'){
        setServerError(result);
      } else if(Array.isArray(result)){
        setSearchResult(result);
      }
    };
    
    
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Search onSearchSubmit={onSearchSubmit} 
              firstName={firstName} 
              lastName={lastName} 
              handleFirstNameChange={handleFirstNameChange} 
              handleLastNameChange={handleLastNameChange} />
      <ListPlayer playerValues={playerValues} onPlayerDelete={onPlayerDelete} />
      <CardList searchResult={searchResult} onPlayerCreate={onPlayerCreate} />
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
