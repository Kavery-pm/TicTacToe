import React from "react";
import PropTypes from "prop-types";

/**
 * Player component
 * Props:
 * - name: display name
 * - symbol: 'X' | 'O' | null
 * - isTurn: highlight when it's player's turn
 * - score: numeric score
 * - onClick: optional click handler
 */
const Player = ({name, symbol}) => {
    return (
 
       <li>
            <span className='player'>
              <span id='player-name'>{name}</span>
              <span className='player-symbol'>{symbol}</span>
              <button>Edit</button>
            </span>
          </li>
      
    );
};

Player.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.oneOf(["X", "O", null]),
    // isTurn: PropTypes.bool,
    // score: PropTypes.number,
    // onClick: PropTypes.func,
};

Player.defaultProps = {
    name: "Player",
    // symbol: null,
    // isTurn: false,
    // score: 0,
    // onClick: () => {},
};

export default Player;