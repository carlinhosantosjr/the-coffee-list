import styled from 'styled-components'

export const ShowcaseContainer = styled.section`
width: 100%;
display: flex;
height: 34rem;
background: radial-gradient(
      ellipse at 25% 65%,
      rgba(255, 135, 37, 0.16),
      transparent 100%
    ),radial-gradient(
      ellipse at 70% 50%,
      rgba(172, 85, 5, 0.74),
      transparent 40%
    ),radial-gradient(
      ellipse at 30% 30%,
      rgba(156, 98, 10, 0.5),
      transparent 40%
    ),radial-gradient(
      ellipse at 25% 20%,
      rgba(248, 0, 0, 0.1),
      transparent 50%
    );
`
export const ShowcaseTitle = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
align-content: center;
width: 36.75rem;

  h1 {
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-800']};
  font-size: 3rem;
  font-weight: 900;
  line-height: 130%;
}

h3 {
  font-family: ${props => props.theme['font-family'].roboto};
  color: ${props => props.theme.brown['brown-600']};
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 130%;
  margin-top: 0.938rem;
}
`

export const ShowcaseIcons = styled.div`
display: grid;
align-items: left;
margin-top: 3.125rem;
grid-template-columns: 0.8fr 1fr;

p {
  color: ${props => props.theme.brown['brown-400']};
  font-family: ${props => props.theme['font-family'].roboto};
}

span {
  display: inline-flex;
  border-radius: 20px;
  padding: 0.5rem;
  margin-right: 0.625rem;
  margin-top: 1rem;
}

  p:nth-child(1) span {
    background-color: ${props => props.theme.yellow['yellow-700']};
}

p:nth-child(2) span {
    background-color: ${props => props.theme.brown['brown-400']};
}
p:nth-child(3) span {
    background-color: ${props => props.theme.yellow['yellow-500']};
}
p:nth-child(4) span {
    background-color: ${props => props.theme.warm['burgundy-800']};
}
`

export const ImageContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 100%;
  width: 29.75rem;
  height: 23.25rem;
  padding: 0;

    @media (max-width: 768px) {
      display: none;
  }
`
