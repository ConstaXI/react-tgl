import { useEffect, useState } from 'react'
import classes from './NewBet.module.css'
import baseUrl from '../api'
import Game from '../components/Game'

type Games = {
  minCartValue: number,
  types: {
    id: number,
    type: string,
    description: string,
    range: number,
    price: number,
    maxNumber: number,
    color: string
  }[]
}

type LotteryGame = {
  id: number,
  type: string,
  description: string,
  range: number,
  price: number,
  maxNumber: number,
  color: string
}

const NewBet = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [games, setGames] = useState<Games>()
  const [selectedGame, setSelectedGame] = useState<LotteryGame>()

  useEffect(() => {
    fetch(`${baseUrl}/cart_games`).then(async (response) => {
      const data = await response.json()

      setIsLoading(false)
      setGames(data)
      setSelectedGame(games?.types[0])
    })
  }, [])

  const changeGame = (index: number) => {
    setSelectedGame(games?.types[index])
  }

  return (
    <div className={classes.container}>
      <div>
        <p className={classes.title}><i><b>NEW BET</b> FOR {selectedGame?.type.toUpperCase()}</i></p>
        <h3><i>Choose a Game</i></h3>
        <div className={classes.gameType}>
          {!games || isLoading
            ? (
              <div>Carregando...</div>
              )
            : games.types.map((type, index) => (
              <>
                <input key={'game_input_' + type.id} type="radio" id={type.type} name="lottery-type"/>
                <label key={'game_label_' + type.id} htmlFor={type.type} className={classes.gameButton} onClick={() => changeGame(index)}>{type.type}</label>
              </>
            ))}
        </div>
        {selectedGame ? <Game type={selectedGame}/> : <p>No games yet.</p>}
      </div>
      <aside className={classes.cart}>
        <div style={{ padding: '32px 20px' }}>
          <h3><i>CART</i></h3>
        </div>
        <div className={classes.saveButtonContainer}>
          <button className={classes.save}>Save</button>
        </div>
      </aside>
    </div>
  )
}

export default NewBet
