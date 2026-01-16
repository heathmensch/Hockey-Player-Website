import React, { SyntheticEvent } from 'react';

interface Props {
    onPlayerDelete: (e: SyntheticEvent) => void;
    playerValue: string;
}

const DeletePlayer = ({onPlayerDelete, playerValue}: Props) => {
    return <div>
        <form onSubmit={onPlayerDelete}>
            <input hidden={true} value={playerValue} />
            <button>X</button>
        </form>
    </div>;
};

export default DeletePlayer;