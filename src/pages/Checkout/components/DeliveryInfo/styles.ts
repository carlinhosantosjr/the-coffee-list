import styled from 'styled-components'

interface ButtonProps {
  $active: boolean;
}

export const DeliveryInfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 60%;

p {
  color: ${props => props.theme.brown['brown-600']};
  font-size: 1rem;
}

span {
  color: ${props => props.theme.brown['brown-400']};
  font-size: 0.875rem;
}
`

export const FormContainer = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
border-radius: 6px;
display: flex;
flex-wrap: wrap;
gap: 1rem;
padding: 0 0 2.5rem 3.125rem;
`

export const HeaderFormContainer = styled.div`
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
flex-basis: 100%;
line-height: 130%;
padding: 1.563rem 0 0;
gap: 0.525rem;
`

const BaseInput = styled.input`
background-color: ${props => props.theme.gray['gray-300']};
height: 42px;
border-radius: 6px;
border: 1px solid ${props => props.theme.gray['gray-400']};
padding: 0.625rem;
font-size: 0.875rem;
line-height: 130%;
color: ${props => props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
outline: none;
&::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }

&:focus {
  border: thin solid ${props => props.theme.yellow['yellow-700']};
}
`

export const CepInput = styled(BaseInput)`
width: 35%;
`

export const StreetInput = styled(BaseInput)`
width: 90%;
`

export const NumberInput = styled(BaseInput)`
width: 35%;
`

export const AddressComplementInput = styled(BaseInput)`
width: 52.5%;
`

export const DistrictInput = styled(BaseInput)`
width: 35%;
`

export const CityInput = styled(BaseInput)`
width: 41.8%;
`

export const StateInput = styled(BaseInput)`
width: 8%;
`

export const PaymentMethodContainer = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
border-radius: 6px;
display: flex;
flex-wrap: wrap;
gap: 1rem;
padding: 0.625rem 0 4.375rem 3.125rem;
`

export const HeaderPaymentContainer = styled.div`
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
flex-basis: 100%;
line-height: 130%;
padding: 1.563rem 0 0.625rem;
gap: 0.525rem;
`

export const PaymentButton = styled.button.attrs<ButtonProps>(() => ({
  type: 'button',
}))`
background-color: ${(props) =>
  props.$active
? props.theme.purple['purple-100']
: props.theme.gray['gray-400']};
color: ${props => props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
align-items: center;
gap: 0.5rem;
padding-left: 0.875rem;
justify-content: start;
font-size: 0.75rem;
height: 45%;
width: 29%;
border: ${(props) =>
  props.$active
    ? `1px solid ${props.theme.purple['purple-500']}`
    : 'none'};
border-radius: 6px;
cursor: pointer;


&:hover {
  background-color: ${props => props.$active
? props.theme.purple['purple-100']
: props.theme.brown['brown-100']};
}

`
