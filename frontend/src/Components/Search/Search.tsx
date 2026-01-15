import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

// Props type definitions
interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    firstName: string | undefined;
    lastName: string | undefined;
    handleFirstNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleLastNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({  onSearchSubmit, 
                                    firstName, 
                                    lastName, 
                                    handleFirstNameChange, 
                                    handleLastNameChange
    }: Props) : JSX.Element => {    
        // send first and last name data on submit
    return (
        <>
        <form onSubmit={onSearchSubmit}> 
                <input  value={firstName} 
                        onChange={handleFirstNameChange} 
                        placeholder='First Name'/>
                <input value={lastName}
                        onChange={handleLastNameChange} 
                        placeholder='Last Name'/>
                <button type='submit'>Search</button>
        </form></>
  )
}

export default Search
