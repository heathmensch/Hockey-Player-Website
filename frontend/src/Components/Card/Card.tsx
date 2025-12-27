import React, { JSX } from 'react'
import "./Card.css";

interface Props {
    Image: string;
    playerName: string;
    playerNumber: number;
    teamName: string;
    position: string;
}
const Card: React.FC<Props> = ({Image, playerName, playerNumber, teamName, position}: Props) : JSX.Element => {
  return (
  <div className="card"><img src={Image} alt={playerName} />
  <div className="details">
    <h2>{playerName}</h2>
    <p>#{playerNumber}</p>
    <p>{teamName}</p>
    </div>
    <p className="info">{position}</p>
    </div>
  );
};

export default Card;