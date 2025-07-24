import styled from 'styled-components'

interface ButtonProps {
  $active: boolean;
}

export const DeliveryInfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
max-width: 60%;
align-items: center;

p {
  color: ${props => props.theme.brown['brown-600']};
  font-size: 1rem;
}

span {
  color: ${props => props.theme.brown['brown-400']};
  font-size: 0.875rem;
}

  @media (max-width: 900px) {
    margin: auto;
    margin-top: 0;
  }

    @media (max-width: 500px) {
      max-width: 100%;
    width: 100%;
  }
`

export const FormContainer = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
border-radius: 6px;
display: flex;
flex-wrap: wrap;
gap: 1rem;
padding: 1rem;

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
flex: 1;
flex-wrap: wrap;
`

export const StreetInput = styled(BaseInput)`
flex: 2;
flex-wrap: wrap;
`

export const NumberInput = styled(BaseInput)`
flex: 1;
flex-wrap: wrap;
`

export const AddressComplementInput = styled(BaseInput)`
flex: 4;
flex-wrap: wrap;
`

export const DistrictInput = styled(BaseInput)`
flex: 2;
flex-wrap: wrap;
`

export const CityInput = styled(BaseInput)`
flex: 1;
flex-wrap: wrap;
`

export const StateInput = styled(BaseInput)`
width: 40px;
flex-wrap: wrap;
`

export const PaymentMethodContainer = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
border-radius: 6px;
display: flex;
flex-wrap: wrap;
gap: 1rem;
padding: 1rem;
`

export const HeaderPaymentContainer = styled.div`
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
line-height: 130%;
padding: 1rem;
gap: 0.525rem;
`

export const PaymentButton = styled.button.attrs<ButtonProps>(() => ({
  type: 'button',
}))`
background-color: ${(props) =>
  props.$active
? props.theme.brown['brown-400']
: props.theme.gray['gray-400']};
color: ${(props) =>
  props.$active
? props.theme.white
: props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
align-items: center;
gap: 0.5rem;
padding-left: 0.875rem;
font-size: 0.75rem;
margin: auto;
height: 40px;
min-width: 170px;
border: ${(props) =>
  props.$active
    ? `1px solid ${props.theme.warm['burgundy-800']}`
    : 'none'};
border-radius: 6px;
cursor: pointer;


&:hover {
  background-color: ${props => props.$active
? props.theme.warm['burgundy-800']
: props.theme.brown['brown-100']};
}

`
