import React, { SyntheticEvent } from "react";

interface Props {
    onPlayerCreate: (e: SyntheticEvent) => void;
    heroImage: string;
}

const AddPlayer = ({onPlayerCreate, heroImage}: Props) => {
    return <form onSubmit={onPlayerCreate}>
    <input readOnly={true} hidden={true} value={heroImage} />
    <button type="submit">Add Player</button>
    </form>;
};

export default AddPlayer;