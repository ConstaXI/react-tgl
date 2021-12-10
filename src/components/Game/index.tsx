import classes from './styles.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

type GameProps = {
  type: {
    id: number,
    type: string,
    description: string,
    range: number,
    price: number,
    maxNumber: number,
    color: string
  }
}

const Game = (props: GameProps): JSX.Element => {
  const numbers = Array.from({ length: props.type.range }, (_, index) => index + 1)

  return (
    <div className={classes.container}>
      <h3><i>Fill your bet</i></h3>
      <p>{props.type.description}</p>
      <div className={classes.numbersContainer}>
        {numbers.map(number => (
          <>
            <input key={'bet_input_' + number} type="checkbox" id={number.toString()} name="lottery-number"/>
            <label key={'bet_label_' + number} htmlFor={number.toString()}>{number}</label>
          </>
        ))}
      </div>
      <div className={classes.optionsContainer}>
        <div>
          <button className={classes.option}>Complete game</button>
          <button className={classes.option}>Clear game</button>
        </div>
        <button className={classes.addToCart}><AiOutlineShoppingCart/> Add to cart</button>
      </div>
    </div>
  )
}

export default Game
