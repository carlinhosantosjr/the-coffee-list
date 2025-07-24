import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
margin-top: 6.5rem;
justify-content: center;
align-items: center;
width: 100%;
background-color: ${props => props.theme.warm['cream-100']};
padding-bottom: 5rem;

h2 {
  font-size: 2rem;
  line-height: 130%;
  font-weight: 900;
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-600']};
  margin-top: 30px;
}
`

export const CoffeeListContainer = styled.div`
  max-width: 88%;
  margin-top: 3.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  row-gap: 3rem;
  column-gap: 1rem;

  @media (max-width: 1330px) {
    grid-template-columns: repeat(3, 1fr);
  }

    @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

      @media (max-width: 627px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
