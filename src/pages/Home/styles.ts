import styled from 'styled-components'

export const HomeContainer = styled.div`
margin: auto;
margin-top: 6.5rem;
justify-content: center;
align-items: center;
width: 100%;
background-color: ${props => props.theme.gray['gray-100']};
padding-bottom: 5rem;

h2 {
  grid-column: 1 / 5;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 900;
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-600']};
}
`

export const CoffeeListContainer = styled.div`
  max-width: 80%;
  padding-left: 0.938rem;
  margin: auto;
  margin-top: 3.125rem;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  row-gap: 3rem;
  column-gap: 1rem;

`
