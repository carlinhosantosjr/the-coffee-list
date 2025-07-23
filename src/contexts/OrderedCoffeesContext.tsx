import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { DeliveryInfoType, orderReducer } from '../reducers/order/reducer'
import {
  addOrderedCoffeeAction, decreaseCoffeeQuantityAction,
  increaseCoffeeQuantityAction, removeCoffeeFromOrderedListAction,
  submitCoffeeOrderAction,
} from '../reducers/order/actions'

export interface OrderedCoffeesType {
  id: number;
  quantity: number;
}

export interface OrderStateType {
  orderedCoffesState: OrderedCoffeesType[];
  deliveryInfo: DeliveryInfoType;
}

interface OrderedCoffeesContextType {
  addOrderedCoffee: (newCoffeeOrdered: OrderedCoffeesType) => void;
  OrderState: OrderStateType;
  increaseCoffeeQuantity: (newCoffeeOrdered: OrderedCoffeesType) => void;
  decreaseCoffeeQuantity: (newCoffeeOrdered: OrderedCoffeesType) => void;
  removeCoffeeFromOrderedList: (id: number) => void;
  submitCoffeeOrder: (deliveryInfo:DeliveryInfoType) => void
}

export const OrderedCoffeesContext =
createContext({} as OrderedCoffeesContextType)

const initialState: OrderStateType = {
  orderedCoffesState: [],
  deliveryInfo: {
    cep: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
    paymentMethod: '',
  },
}

const loadState = (initialState: any) => {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:order-state-1.0.0',
  )

  if (storedStateAsJSON) {
    return { orderedCoffesState: JSON.parse(storedStateAsJSON) }
  }

  return initialState
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function OrderedCoffeesContextProvider({ children }:
CyclesContextProviderProps) {
  const [OrderState, dispatch] = useReducer(
    orderReducer,
    initialState,
    loadState,
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(OrderState.orderedCoffesState)

    localStorage.setItem('@coffee-delivery:order-state-1.0.0', stateJSON)
  }, [OrderState.orderedCoffesState],
  )

  function addOrderedCoffee(newCoffeeOrdered: OrderedCoffeesType) {
    dispatch(addOrderedCoffeeAction(newCoffeeOrdered))
  }

  function increaseCoffeeQuantity(newCoffeeOrdered: OrderedCoffeesType) {
    dispatch(increaseCoffeeQuantityAction(newCoffeeOrdered))
  }

  function decreaseCoffeeQuantity(newCoffeeOrdered: OrderedCoffeesType) {
    dispatch(decreaseCoffeeQuantityAction(newCoffeeOrdered))
  }
  function removeCoffeeFromOrderedList(id: number) {
    dispatch(removeCoffeeFromOrderedListAction(id))
  }
  function submitCoffeeOrder(deliveryInfo: DeliveryInfoType) {
    dispatch(submitCoffeeOrderAction(deliveryInfo))
  }

  return (
    <OrderedCoffeesContext.Provider
      value={{
        addOrderedCoffee,
        OrderState,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        removeCoffeeFromOrderedList,
        submitCoffeeOrder,
      }}
    >
      {children}
    </OrderedCoffeesContext.Provider>
  )
}
