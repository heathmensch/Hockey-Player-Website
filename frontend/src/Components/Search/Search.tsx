import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

interface Props {
    onClick: (e: SyntheticEvent) => void;
    firstName: string | undefined;
    lastName: string | undefined;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFirstNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleLastNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, 
                                    firstName, 
                                    lastName, 
                                    search, 
                                    handleChange,
                                    handleFirstNameChange, 
                                    handleLastNameChange
    }: Props) : JSX.Element => {    
    return (
        <div>
            <input 
                value={firstName} 
                onChange={(e) => handleFirstNameChange(e)}
                placeholder="First Name"
            />
            <input 
                value={lastName} 
                onChange={(e) => handleLastNameChange(e)}
                placeholder="Last Name"
            />
            <button onClick={(e) => onClick(e)}>Search</button>
        </div>
        // <div>
        //     <input value={search} onChange={(e) => handleChange(e)}></input>
        //     <button onClick={(e) => onClick(e)}>The Hello Button</button>
        // </div>
  )
}

export default Search
