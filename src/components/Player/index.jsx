import { useState } from "react";
import PropTypes from "prop-types";

const Player = ({ name, symbol, isActive, nameChangeHandler }) => {
    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName] = useState(name);


    const saveAndExit = () => {
        const trimmed = playerName.trim() || name;
        nameChangeHandler?.(symbol, trimmed);
    };

    const editHandler = () => {
        if (isEditing) {
            saveAndExit();
        } else {
            setisEditing(true);
        }
    };

    const onChangeHandler = (e) => {
        setplayerName(e.target.value);
    };

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {isEditing ? (
                    <input
                        type="text"
                        value={playerName}
                        onChange={onChangeHandler}
                        onBlur={saveAndExit}
                        autoFocus
                    />
                ) : (

                    <span id='player-name'>{name}</span>
                )}
                <span className='player-symbol'>{symbol}</span>
                <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    );
};

Player.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.oneOf(["X", "O", null]),
    isActive: PropTypes.bool,
    nameChangeHandler: PropTypes.func,
};

Player.defaultProps = {
    name: "Player",
    symbol: null,
};

export default Player;