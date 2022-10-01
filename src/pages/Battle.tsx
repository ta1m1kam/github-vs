import React, { useState } from 'react'
import PlayerInput from '../components/Battle/PlayerInput'
import PlayerPreview from '../components/Battle/PlayerPreview'

const Battle = () => {
  const [playerOne, setPlayerOne] = useState<Player>(null)
  const [playerTwo, setPlayerTwo] = useState<Player>(null)

  return (
    <>
      <div className="players-container">
        <h1 className="center-text header-lg">Battle</h1>
        <div className="row space-around">
          {playerOne ? (
            <PlayerPreview
              label="Preview"
              username={playerOne.login}
              onReset={() => {
                console.log('reset')
              }}
            />
          ) : (
            <PlayerInput label="Player1" onSubmit={setPlayerOne} />
          )}

          {playerTwo ? (
            <PlayerPreview
              label="Preview"
              username={playerTwo.login}
              onReset={() => {
                console.log('reset')
              }}
            />
          ) : (
            <PlayerInput label="Player2" onSubmit={setPlayerTwo} />
          )}
        </div>
      </div>
    </>
  )
}

export default Battle
