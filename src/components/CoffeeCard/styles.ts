import { ShoppingCartSimple } from '@phosphor-icons/react'
import styled from 'styled-components'

export const CoffeeContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
background-color: ${props => props.theme.gray['gray-200']};
max-width: 16rem;
max-height: 19.375rem;
border-radius: 5px 25px ;

img {
  margin-top: -1.25rem;
}

h3 {
  color: ${props => props.theme.brown['brown-600']};
  font-family: ${props => props.theme['font-family'].baloo};
}

p {
  color: ${props => props.theme.brown['brown-200']};
  font-family: ${props => props.theme['font-family'].roboto};
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  margin: 0 0.625rem;
}
`

export const LabelContainer = styled.div`
display: flex;
gap: 0.325rem;

span {
  background-color: ${props => props.theme.yellow['yellow-100']};
  color: ${props => props.theme.yellow['yellow-700']};
  font-family: ${props => props.theme['font-family'].roboto};
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: bold;
  padding: 0.313rem;
  border-radius: 10px;
}
`

export const BottomContainer = styled.div`
display: flex;
align-items: center;
margin-inline: 0.625rem;
gap: 0.5rem;
padding: 1.563rem;

p {

  margin-left: 0;
  font-size: 0.875rem;
  margin-right: -0.313rem;
}

span {
  font-size: 1.5rem;
  font-weight: 900; 
  line-height: 130%;
  min-width: 4rem;
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-400']};
}
`

export const BuyButtonContainer = styled.div`
display: flex;
background-color: ${props => props.theme.purple['purple-700']};
border-radius: 5px;
padding: 0.313rem;
cursor: pointer;
user-select: none;

&:hover {
  background-color: ${props => props.theme.purple['purple-500']};
}
`

export const BuyButton = styled(ShoppingCartSimple)`
color: ${props => props.theme.white};
`
