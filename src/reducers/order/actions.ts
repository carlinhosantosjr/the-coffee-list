import { OrderedCoffeesType } from '../../contexts/OrderedCoffeesContext'
import { DeliveryInfoType } from './reducer'

export enum ActionTypes {
  /* eslint-disable no-unused-vars */
  ADD_ORDERED_COFFEE = 'ADD_ORDERED_COFFEE',
  INCREASE_COFFEE_QUANTITY = 'INCREASE_COFFEE_QUANTITY',
  DECREASE_COFFEE_QUANTITY = 'DECREASE_COFFEE_QUANTITY',
  REMOVE_COFFEE_FROM_LIST = 'REMOVE_COFFEE_FROM_LIST',
  SUBMIT_COFFEE_ORDER = 'SUBMIT_COFFEE_ORDER',
}

export function addOrderedCoffeeAction(newCoffeeOrdered: OrderedCoffeesType) {
  return {
    type: 'ADD_ORDERED_COFFEE',
    payload: { newCoffeeOrdered },
  }
}

export function increaseCoffeeQuantityAction(
  newCoffeeOrdered: OrderedCoffeesType) {
  return {
    type: 'INCREASE_COFFEE_QUANTITY',
    payload: { newCoffeeOrdered },
  }
}

export function decreaseCoffeeQuantityAction(
  newCoffeeOrdered: OrderedCoffeesType) {
  return {
    type: 'DECREASE_COFFEE_QUANTITY',
    payload: { newCoffeeOrdered },
  }
}

export function removeCoffeeFromOrderedListAction(id: number) {
  return {
    type: 'REMOVE_COFFEE_FROM_LIST',
    payload: { id },
  }
}

export function submitCoffeeOrderAction(deliveryInfo: DeliveryInfoType) {
  return {
    type: 'SUBMIT_COFFEE_ORDER',
    payload: { deliveryInfo },
  }
}
