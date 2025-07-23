/* eslint-disable @stylistic/jsx-closing-tag-location */
import {
  CurrencyIconContainer,
  GradientBorderContainer,
  MainSuccessContainer,
  MapPinIconContainer,
  OrderInfoContainer, OrderSuccessContainer,
  PhraseContainer,
  TimerIconContainer,
  TitleInfoContainer,
} from './styles'
import successImg from '../../assets/successImg.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { OrderedCoffeesContext } from '../../contexts/OrderedCoffeesContext'

export function OrderSuccess() {
  const { OrderState } = useContext(OrderedCoffeesContext)

  function getPaymentMethodLabel(method:string) {
    switch (method) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'

      default:return 0
    }
  }

  return (
    <MainSuccessContainer>
      {OrderState.deliveryInfo
        ? <OrderSuccessContainer>
          <TitleInfoContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>
          </TitleInfoContainer>
          <GradientBorderContainer>
            <OrderInfoContainer>
              <PhraseContainer>
                <MapPinIconContainer>
                  <MapPin size={16} weight="fill" color="white" />
                </MapPinIconContainer>
                <p>Entrega em
                  <span> Rua {OrderState.deliveryInfo.street}
                    , {OrderState.deliveryInfo.number}
                  </span>
                </p>
                <p>
                  {OrderState.deliveryInfo.district} - {OrderState.deliveryInfo.city}
                  , {OrderState.deliveryInfo.state}
                </p>
              </PhraseContainer>
              <PhraseContainer>
                <TimerIconContainer>
                  <Timer size={16} weight="fill" color="white" />
                </TimerIconContainer>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </PhraseContainer>
              <PhraseContainer>
                <CurrencyIconContainer>
                  <CurrencyDollar size={16} color="white" />
                </CurrencyIconContainer>
                <p>Pagamento na entrega</p>
                <span>
                  {getPaymentMethodLabel(OrderState.deliveryInfo.paymentMethod)}
                </span>
              </PhraseContainer>
            </OrderInfoContainer>
          </GradientBorderContainer>
          <img src={successImg} alt="" />
        </OrderSuccessContainer>
        : <h2>Nenhum pedido encontrado.</h2>}
    </MainSuccessContainer>
  )
}
