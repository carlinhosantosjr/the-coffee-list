import {
  DecreaseButton, IncreaseButton, QuantityContainer,
  QuantityInputContainer,
} from './styles'
import { OrderedCoffeesType } from '../../../contexts/OrderedCoffeesContext'

interface quantityProps {
  onIncreaseQuantity: (data?:OrderedCoffeesType) => void;
  onDecreaseQuantity: (data?:OrderedCoffeesType) => void;
  value?: number
}

export function QuantityInput(data: quantityProps) {
  return (
    <QuantityContainer>
      <DecreaseButton onClick={() => data.onDecreaseQuantity()} />
      <QuantityInputContainer value={data.value} readOnly />
      <IncreaseButton onClick={() => data.onIncreaseQuantity()} />
    </QuantityContainer>
  )
}
