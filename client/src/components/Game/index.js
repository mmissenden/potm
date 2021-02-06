import React from "react";
import { FaTimes, FaPencilAlt, FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa'

function Game({ game, onDelete, onEdit, onOpenVoting }) {
  return (
    <div className="game">
      Round {game.round}:   {game.gameDate}  v  {game.opposition}  
      <FaEnvelopeOpen
          style={game.votingOpen ? {color: 'green', cursor: 'pointer', fontSize: '24px' } :
             {color: 'red', cursor: 'pointer', fontSize: '24px' }}
          title={game.votingOpen ? "Close Voting" : "Open Voting" }
          onClick={() => onOpenVoting(game._id)}
      />
      <FaPencilAlt
          style={{ color: 'blue', cursor: 'pointer', fontSize: '24px' }}
          title="Edit Game"
          onClick={() => onEdit(game._id)}
      />
      <FaTimes
        style={{ color: 'red', cursor: 'pointer', fontSize: '24px' }}
        title="Delete Game"
        onClick={() => onDelete(game._id)}
      />
    </div>
  )
}

export default Game;