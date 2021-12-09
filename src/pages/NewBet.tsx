import { useCallback, useEffect, useState } from 'react'
import classes from './NewBet.module.css'
import baseUrl from '../api'

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

const NewBet = (): JSX.Element => {
  const [gameType] = useState<string>('Mega-Sena')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [games, setGames] = useState<Games>()

  const getGames = useCallback(() => {
    fetch(`${baseUrl}/cart_games`).then(async (response) => {
      if (response.ok) {
        return response.json()
      } else {
        const data = await response.json()
        let errorMessage = 'Authentication failed.'
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message
        }
        throw new Error(errorMessage)
      }
    }).then(data => {
      setIsLoading(false)
      setGames(data)
    }).catch((error) => {
      alert(error.message)
    })
  }, [])

  useEffect(() => {
    getGames()
  }, [getGames])

  return (
    <>
      <p className={classes.title}><i><b>NEW BET</b> FOR {gameType.toUpperCase()}</i></p>
      <h3><i>Choose a Game</i></h3>
      <div className={classes.gameType}>
        {!games || isLoading
          ? (
            <div>Carregando...</div>
            )
          : games.types.map(type => (
            <>
              <input key={type.id} type="radio" id={type.type} name="lottery-type"/>
              <label key={type.id} htmlFor={type.type} className={classes.gameButton}>{type.type}</label>
            </>
          ))}
      </div>
    </>
  )
}

export default NewBet
