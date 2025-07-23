import { TrashIcon } from '@phosphor-icons/react'
import styled from 'styled-components'

export const CoffeeCartItemContainer = styled.div`
width: 80%;
display: flex;
justify-content: space-between;
margin: 2.5rem;
border-bottom: 1px solid ${props => props.theme.gray['gray-400']};
padding-bottom: 2.188rem;

img {
  width: 64px;
  grid-row: 1 / 3;
}

h3 {
font-family: ${props => props.theme['font-family'].roboto};
color: ${props => props.theme.brown['brown-600']};
font-size: 1rem;
font-weight: normal;
}

span {
grid-column: 3;
font-family: ${props => props.theme['font-family'].roboto};
color: ${props => props.theme.brown['brown-400']};
font-size: 1rem;
font-weight: bold;
}
`

export const CoffeeItemInfoContainer = styled.div`
display: grid;
gap: 0.725rem;
align-items: center;
justify-content: center;
grid-template-columns: 1fr, 2fr, 1fr;
grid-template-rows: repeat(2, auto); 
`

export const CoffeeCartItemButtonContainer = styled.div`
  grid-column: 2;
  display: flex;
  grid-gap: 0.5rem;
  max-height: 35px;  
`

export const RemoveButtonContainer = styled.div`
background-color: ${props => props.theme.gray['gray-400']};
align-items: center;
display: flex;
gap: 0.2rem;
padding: 0.625rem;
border-radius: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.theme.brown['brown-100']};
}

label {
  font-family: ${props => props.theme['font-family'].roboto};
  color: ${props => props.theme.brown['brown-400']};
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: normal;
  pointer-events: none;
}
`

export const RemoveButton = styled(TrashIcon)`
color: ${props => props.theme.purple['purple-500']};
font-style: bold;
`
