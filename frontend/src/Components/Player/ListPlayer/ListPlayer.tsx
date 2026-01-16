import React, { SyntheticEvent } from 'react';
import CardPlayer from '../CardPlayer/CardPlayer';

interface Props {
    playerValues: string[];
    onPlayerDelete: (e: SyntheticEvent) => void;
}

const ListPlayer = ({playerValues, onPlayerDelete}: Props) => {
    return (
    <>
    <h3>My Players</h3>
    <ul>
        {playerValues && playerValues.map((playerValue) => {
            return <CardPlayer playerValue={playerValue} onPlayerDelete={onPlayerDelete} />;
        })}
    </ul>
    </>
    )
};

export default ListPlayer;