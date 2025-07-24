import styled from 'styled-components'

export const MainSuccessContainer = styled.div`
display: flex;
margin: auto;
min-height: 700px;

h2 {
  color: ${props => props.theme.brown['brown-400']};
  font-family: ${props => props.theme['font-family'].baloo};
  font-size: 2rem;
  display: flex;
  margin: auto;
}
`

export const OrderSuccessContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, auto);
margin: auto;
margin-top: 12rem;
gap: 3rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    img {
      display: none;
    }
  }
`

export const TitleInfoContainer = styled.div`
grid-column: 1 / -1;

h1 {
  color: ${props => props.theme.yellow['yellow-700']};
  font-family: ${props => props.theme['font-family'].baloo};
  font-size: 2rem;
}

h3 {
  color: ${props => props.theme.brown['brown-600']};
  font-family: ${props => props.theme['font-family'].roboto};
  font-size: 1.25rem;
  font-weight: 500;
}
`

export const OrderInfoContainer = styled.div`
color: ${props => props.theme.brown['brown-400']};
font-family: ${props => props.theme['font-family'].roboto};
display: flex;
flex-direction: column;
gap: 2.5rem;
border: 1px solid transparent;
border-radius: 5px 35px;
padding: 2.5rem;
background-color: ${props => props.theme.gray['gray-100']};
height: 100%;
`

export const GradientBorderContainer = styled.div`
  border-radius: 5px 35px;
  background: linear-gradient(45deg, #ff7f50, #1e90ff);
  padding: 1px;
`

export const PhraseContainer = styled.div`
display: grid;
grid-template-columns: 10% 90%;
grid-template-rows: repeat(2, auto);
row-gap: 0.1rem;
column-gap: 0.525rem;
font-size: 1rem;

span {
  font-weight: bold;
}
`

const IconContainer = styled.div`
display: flex;
justify-content: center;
grid-row: 1 / 3;
padding: 0.5rem;
border-radius: 999px;
margin: 0.25rem;
width: 30px;
height: 32px;
`

export const MapPinIconContainer = styled(IconContainer)`
background-color: ${props => props.theme.purple['purple-500']};

`

export const TimerIconContainer = styled(IconContainer)`
background-color: ${props => props.theme.yellow['yellow-500']};
`

export const CurrencyIconContainer = styled(IconContainer)`
background-color: ${props => props.theme.yellow['yellow-700']};
`
