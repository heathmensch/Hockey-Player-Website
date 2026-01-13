import React, { JSX } from 'react'
import Card from '../Card/Card'
import { PlayerSearch } from '../../player'
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: PlayerSearch[];
}

const CardList: React.FC<Props> = ({ searchResult }: Props) : JSX.Element => {
  return <>
  {searchResult.length > 0 ? (
    searchResult.map((result) => {
      return <Card 
          id={result.playerId.toString()} 
          key={uuidv4()}
          searchResult={result} />
    })
  ) : (
    <h1>No results</h1>
  )} </>
}

export default CardList
