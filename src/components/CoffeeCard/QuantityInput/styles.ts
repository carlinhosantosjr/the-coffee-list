import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import React from 'react'
import styled from 'styled-components'

export const QuantityContainer = styled.div`
background-color: ${props => props.theme.gray['gray-400']};
display: flex;
align-items: center;
gap: 0.2rem;
padding: 0.625rem;
border-radius: 8px;
`

export const QuantityInputContainer = styled.input`
font-family: ${props => props.theme['font-family'].roboto};
color: ${props => props.theme.brown['brown-800']};
font-size: 1rem;
display: flex;
text-align: center;
border: none;
margin: auto;
background-color: transparent;
max-width: 1.4rem;
pointer-events: none;
`

export const DecreaseButton = styled(MinusIcon)<React.SVGProps<SVGSVGElement>>`
color: ${props => props.theme.brown['brown-600']};
font-size: 0.875rem;
cursor: pointer;
user-select: none;

&:hover {
  color: ${props => props.theme.brown['brown-800']};
}
`

export const IncreaseButton = styled(PlusIcon)<React.SVGProps<SVGSVGElement>>`
color: ${props => props.theme.brown['brown-600']};
font-size: 0.875rem;
cursor: pointer;
user-select: none;

&:hover {
  color: ${props => props.theme.brown['brown-800']};
}
`
