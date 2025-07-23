import {
  Bank, CreditCard, CurrencyDollar, MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressComplementInput,
  CepInput,
  CityInput, DeliveryInfoContainer,
  DistrictInput,
  FormContainer,
  HeaderFormContainer,
  HeaderPaymentContainer,
  NumberInput,
  PaymentButton,
  PaymentMethodContainer,
  StateInput,
  StreetInput,
} from './styles'
import { useTheme } from 'styled-components'
import { useFormContext } from 'react-hook-form'

interface DeliveryInfoProps {
  selectPaymentMethod: (method:string) => void
  methodValue: string
}

export function DeliveryInfo(props:DeliveryInfoProps) {
  const theme = useTheme()
  const { register } = useFormContext()

  function selectMethod(method:string) {
    props.selectPaymentMethod(method)
  }

  return (
    <DeliveryInfoContainer>
      <h1>Complete seu pedido</h1>
      <FormContainer>
        <HeaderFormContainer>
          <MapPinLine
            size={22} weight="regular"
            color={theme.yellow['yellow-700']}
          />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </HeaderFormContainer>
        <CepInput
          placeholder="CEP" id="cep" {...register('cep')}
          required type="number"
        />
        <StreetInput
          placeholder="Rua" id="street" {...register('street')}
          required
        />
        <NumberInput
          placeholder="Número" id="number" {...register('number')}
          required type="number"
        />
        <AddressComplementInput
          placeholder="Complemento" id="complement"
          {...register('complement')}
        />
        <DistrictInput
          placeholder="Bairro" id="district"
          {...register('district')} required
        />
        <CityInput
          placeholder="Cidade" id="city" {...register('city')}
          required
        />
        <StateInput
          placeholder="UF" id="state" {...register('state')}
          required
        />
      </FormContainer>
      <PaymentMethodContainer>
        <HeaderPaymentContainer>
          <CurrencyDollar
            size={22} weight="regular"
            color={theme.purple['purple-500']}
          />
          <div>
            <p>Pagamento</p>
            <span>O pagamento é feito na entrega. Escolha a
              forma que deseja pagar
            </span>
          </div>
        </HeaderPaymentContainer>
        <PaymentButton
          $active={props.methodValue === 'credit'}
          onClick={() => selectMethod('credit')}
        >
          <CreditCard size={16} color={theme.purple['purple-500']} />
          CARTÃO DE CRÉDITO
        </PaymentButton>
        <PaymentButton
          $active={props.methodValue === 'debit'}
          onClick={() => selectMethod('debit')}

        >
          <Bank size={16} color={theme.purple['purple-500']} />
          CARTÃO DE DÉBITO
        </PaymentButton>
        <PaymentButton
          $active={props.methodValue === 'money'}
          onClick={() => selectMethod('money')}
        >
          <Money size={16} color={theme.purple['purple-500']} />
          DINHEIRO
        </PaymentButton>
      </PaymentMethodContainer>
    </DeliveryInfoContainer>
  )
}
