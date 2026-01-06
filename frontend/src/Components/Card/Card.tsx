import React, { JSX } from 'react'
import "./Card.css";
import { PlayerSearch } from '../../player';

interface Props {
    id: string;
    searchResult: PlayerSearch;

}
const Card: React.FC<Props> = ({ id, searchResult }: Props) : JSX.Element => {
  console.log("PLAYER NAME:", searchResult.firstName);
  return (
  <div className="card">
    <img 
      src={searchResult.heroImage}
      alt={`${searchResult.firstName} ${searchResult.lastName}`} 
    />

    <div className="details">
      <h2>{searchResult.firstName} {searchResult.lastName}</h2>
      <p>{searchResult.currentTeamAbbrev} • {searchResult.position}</p>
    </div>

    {/* Stats Grid */}
    <div className="stats">
      <div className="stat">
        <div className="stat-value">{searchResult.goals}</div>
        <div className="stat-label">Goals</div>
      </div>

      <div className="stat">
        <div className="stat-value">{searchResult.assists}</div>
        <div className="stat-label">Assists</div>
      </div>

      <div className="stat">
        <div className="stat-value">{searchResult.points}</div>
        <div className="stat-label">Points</div>
      </div>
    </div>

    {/* Player ID Badge */}
    <p className="info">ID: {searchResult.playerId}</p>
  </div>

  );
};

export default Card;