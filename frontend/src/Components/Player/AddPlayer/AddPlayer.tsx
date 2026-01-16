import React, { SyntheticEvent } from "react";

interface Props {
    onPlayerCreate: (e: SyntheticEvent) => void;
    firstName: string;
    lastName: string;
}

const AddPlayer = ({onPlayerCreate, firstName, lastName}: Props) => {
    return <form onSubmit={onPlayerCreate}>
    <input readOnly={true} hidden={true} value={`${firstName} ${lastName}`} />
    <button type="submit">Add Player</button>
    </form>;
};

export default AddPlayer;