import React, { SyntheticEvent } from 'react';
import DeletePlayer from '../DeletePlayer/DeletePlayer';

interface Props {
    playerValue: string;
    onPlayerDelete: (e: SyntheticEvent) => void;
}

const CardPlayer = ({playerValue, onPlayerDelete}: Props) => {
    return <>
    <h4>{playerValue}</h4>
    <DeletePlayer 
        onPlayerDelete={onPlayerDelete} 
        playerValue={playerValue} 
        />
    </>;
}

export default CardPlayer;