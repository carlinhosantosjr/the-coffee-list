import { OrderStateType }
  from '../../contexts/OrderedCoffeesContext'
import { ActionTypes } from './actions'

export interface DeliveryInfoType {
  cep: string;
  street: string;
  number: string;
  addresComplementInput?: number;
  district: string;
  city: string;
  state: string;
  paymentMethod: string
}

export function orderReducer(state: OrderStateType,
  action: any): OrderStateType {
  switch (action.type) {
    case ActionTypes.ADD_ORDERED_COFFEE: {
      const existingCoffee = state.orderedCoffesState.find(
        (coffee) => coffee.id === action.payload.newCoffeeOrdered.id,
      )

      if (existingCoffee) {
        return {
          ...state,
          orderedCoffesState: state.orderedCoffesState.map((coffee) =>
            coffee.id === existingCoffee.id
              ? {
                  ...coffee,
                  quantity:
                  coffee.quantity + action.payload.newCoffeeOrdered.quantity,
                }
              : coffee,
          ),
        }
      }

      return {
        ...state,
        orderedCoffesState: [
          ...state.orderedCoffesState,
          action.payload.newCoffeeOrdered],
      }
    }

    case ActionTypes.INCREASE_COFFEE_QUANTITY: {
      return {
        ...state,
        orderedCoffesState: state.orderedCoffesState.map((coffee) =>
          coffee.id === action.payload.newCoffeeOrdered.id
            ? { ...coffee, quantity: coffee.quantity + 1 }
            : coffee,
        ),
      }
    }

    case ActionTypes.DECREASE_COFFEE_QUANTITY: {
      return {
        ...state,
        orderedCoffesState: state.orderedCoffesState.map((coffee) =>
          coffee.id === action.payload.newCoffeeOrdered.id &&
        coffee.quantity > 1
            ? { ...coffee, quantity: coffee.quantity - 1 }
            : coffee,
        ),
      }
    }

    case ActionTypes.REMOVE_COFFEE_FROM_LIST: {
      return {
        ...state,
        orderedCoffesState: state.orderedCoffesState.filter(
          (coffee) => coffee.id !== action.payload.id,
        ),
      }
    }

    case ActionTypes.SUBMIT_COFFEE_ORDER: {
      return {
        ...state,
        deliveryInfo: {
          cep: action.payload.deliveryInfo.cep,
          street: action.payload.deliveryInfo.street,
          number: action.payload.deliveryInfo.number,
          district: action.payload.deliveryInfo.district,
          city: action.payload.deliveryInfo.city,
          state: action.payload.deliveryInfo.state,
          paymentMethod: action.payload.deliveryInfo.paymentMethod,
        },
        orderedCoffesState: [],
      }
    }

    default:
      return state
  }
}
