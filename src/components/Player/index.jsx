import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

/**
 * Player component
 * Props:
 * - name: display name
 * - symbol: 'X' | 'O' | null
 */
const Player = ({ name, symbol, isActive }) => {
    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName]=useState(name);
    const editHandler = () => {
        setisEditing(isEditing => !isEditing);
    }
    const onChangeHandler = (e) => {
     setplayerName(e.target.value);
    }
    return (

        <li className={isActive ?'highlight-player' : undefined}>
            <span className='player'>
                {isEditing ? (
                    <input
                        type="text"
                        value={playerName}
                        onChange={onChangeHandler}
                        onBlur={() => setisEditing(false)}
                        autoFocus
                    />
                ) : (
                    <span id='player-name'>{playerName}</span>)}
                <span className='player-symbol'>{symbol}</span>
                <button onClick={editHandler}>{!isEditing ? 'Edit' : 'Save'}</button>
            </span>
        </li>

    );
};

Player.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.oneOf(["X", "O", null]),
};

Player.defaultProps = {
    name: "Player",
    symbol: null,
};

export default Player;