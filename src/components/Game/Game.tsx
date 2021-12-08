import { useState } from 'react'

const Game = (): JSX.Element => {
  const [gameType] = useState<string>('Mega-Sena')

  return (
      <h1><strong>NEW BET</strong> FOR {gameType}</h1>
  )
}

export default Game

export {}
