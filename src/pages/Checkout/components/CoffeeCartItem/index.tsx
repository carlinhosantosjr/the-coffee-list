import { useContext } from 'react'
import { QuantityInput } from '../../../../components/CoffeeCard/QuantityInput'
import {
  OrderedCoffeesContext,
} from '../../../../contexts/OrderedCoffeesContext'
import {
  CoffeeCartItemButtonContainer,
  CoffeeCartItemContainer,
  CoffeeItemInfoContainer,
  RemoveButton,
  RemoveButtonContainer,
} from './styles'

export interface CoffeeCartItemProps {
  id: number,
  name: string,
  image: string,
  value: number,
}

export function CoffeeCartItem(data: CoffeeCartItemProps) {
  const {
    OrderState, increaseCoffeeQuantity, decreaseCoffeeQuantity,
    removeCoffeeFromOrderedList,
  } =
  useContext(OrderedCoffeesContext)
  const quantityValue = OrderState.orderedCoffesState.find((orderedCoffe) =>
    orderedCoffe.id === data.id,
  )

  function handleIncreaseCoffeeQuantity() {
    const coffee = {
      id: data.id,
      quantity: quantityValue!.quantity,
    }
    increaseCoffeeQuantity(coffee)
  }

  function handleDecreaseCoffeeQuantity() {
    const coffee = {
      id: data.id,
      quantity: quantityValue!.quantity,
    }
    decreaseCoffeeQuantity(coffee)
  }

  function handleRemoveCoffeeFromList() {
    const coffeeId = data.id
    removeCoffeeFromOrderedList(coffeeId)
  }

  return (
    <CoffeeCartItemContainer>
      <CoffeeItemInfoContainer>
        <img src={data.image} alt="" />
        <h3>{data.name}</h3>
        <CoffeeCartItemButtonContainer>
          <QuantityInput
            onIncreaseQuantity={handleIncreaseCoffeeQuantity}
            onDecreaseQuantity={handleDecreaseCoffeeQuantity}
            value={quantityValue?.quantity}
          />
          <RemoveButtonContainer onClick={handleRemoveCoffeeFromList}>
            <RemoveButton size={16} />
            <label>REMOVER</label>
          </RemoveButtonContainer>
        </CoffeeCartItemButtonContainer>
      </CoffeeItemInfoContainer>
      <span>R$ {
      (quantityValue && quantityValue.quantity !== undefined
        ? data.value * quantityValue.quantity
        : 0).toFixed(2).replace('.', ',')
      }
      </span>
    </CoffeeCartItemContainer>
  )
}
