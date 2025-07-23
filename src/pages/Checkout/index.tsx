/* eslint-disable @stylistic/jsx-closing-tag-location */
import { CoffeeCartItem } from './components/CoffeeCartItem'
import { DeliveryInfo } from './components/DeliveryInfo'
import {
  CheckoutContainer, ConfirmCheckoutButtom, SelectedCoffees,
  SelectedCoffeesBottom,
  SelectedCoffeesContainer,
} from './styles'
import {
  OrderedCoffeesContext,
} from '../../contexts/OrderedCoffeesContext'
import { DeliveryInfoType } from '../../reducers/order/reducer'
import { coffees } from '../../mocks/coffees'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const { OrderState, submitCoffeeOrder } = useContext(OrderedCoffeesContext)
  const [paymentMethod, setPaymentMethod] = useState('')
  const navigate = useNavigate()

  const deliveryInfoForm = useForm<DeliveryInfoType>({
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      district: '',
      city: '',
      state: '',
      paymentMethod: '',
    },
  })

  function selectPaymentMethod(method:string) {
    setPaymentMethod(method)
  }

  const { handleSubmit } = deliveryInfoForm

  const coffeeListSelected =
  OrderState.orderedCoffesState.map((orderedCoffe) => {
    return coffees.find(coffee => coffee.id === orderedCoffe.id)
  })

  const totalValue =
  OrderState.orderedCoffesState.reduce((total, orderedCoffee) => {
    const coffee = coffees.find(coffee => coffee.id === orderedCoffee.id)
    if (coffee) {
      total += coffee.value * orderedCoffee.quantity
    }
    return total
  }, 0)

  function submitFormData(formData:DeliveryInfoType) {
    const deliveryInfoMoreMethodPayment = { ...formData, paymentMethod }
    submitCoffeeOrder(deliveryInfoMoreMethodPayment)
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(submitFormData)}>
      {OrderState.orderedCoffesState.length > 0
        ? <>
          <FormProvider {
            ...deliveryInfoForm}
          >
            <DeliveryInfo
              selectPaymentMethod={selectPaymentMethod}
              methodValue={paymentMethod}
            />
          </FormProvider>
          <SelectedCoffeesContainer>
            <h1>Cafés selecionados</h1>
            <SelectedCoffees>
              {coffeeListSelected.length > 0
                ? coffeeListSelected.filter((coffeeSelected) =>
                  coffeeSelected !== undefined)
                  .map((coffeeSelected) => (
                    <CoffeeCartItem
                      key={coffeeSelected.id}
                      id={coffeeSelected.id}
                      image={coffeeSelected.image}
                      name={coffeeSelected.name}
                      value={coffeeSelected.value}
                    />
                  ))
                : <h1>hehe</h1>}
              {coffeeListSelected.length
                ? <SelectedCoffeesBottom>
                  <label>Total de itens</label>
                  <span>R$ {totalValue.toFixed(2).replace('.', ',')}</span>
                  <label>Entrega</label>
                  <span>R$ 3,50</span>
                  <h3>Total</h3>
                  <h3>R$ {(totalValue + 3.5).toFixed(2).replace('.', ',')}</h3>
                  <ConfirmCheckoutButtom
                    type="submit" title="OrderSuccess" disabled={!paymentMethod}
                  >
                    <p>CONFIRMAR PEDIDO</p>
                  </ConfirmCheckoutButtom>
                </SelectedCoffeesBottom>
                : <></>}
            </SelectedCoffees>
          </SelectedCoffeesContainer>
        </>
        : <h2>Não há cafés no carrinho</h2>}
    </CheckoutContainer>
  )
}
