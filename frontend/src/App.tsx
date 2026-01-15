import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { PlayerSearch } from './player';
import { searchPlayers } from './api';

function App() {
    const [firstName, setFirstName] = useState<string>(""); // Explicit type string
    const [lastName, setLastName] = useState<string>(""); // Explicit type string
    const [searchResult, setSearchResult] = useState<PlayerSearch[]>([]); // Explicit type any
    const [serverError, setServerError] = useState<string>("");


    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const onPlayerCreate = (e: SyntheticEvent) => {
      e.preventDefault();
      console.log(e);
    };

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
      <Search onSearchSubmit={onSearchSubmit} 
              firstName={firstName} 
              lastName={lastName} 
              handleFirstNameChange={handleFirstNameChange} 
              handleLastNameChange={handleLastNameChange} />
              
      <CardList searchResult={searchResult} onPlayerCreate={onPlayerCreate} />
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
