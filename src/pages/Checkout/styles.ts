import styled from 'styled-components'

export const CheckoutContainer = styled.form`
background-color: ${props => props.theme.warm['cream-100']};
display: flex;
margin: auto;
justify-content: space-between;
margin-top: 9rem ;
max-width: 80%;
min-height: 90vh;
gap: 2rem;

h1 {
  font-family: ${props => props.theme['font-family'].baloo};
  color: ${props => props.theme.brown['brown-600']};
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: bold;
}

h2 {
  color: ${props => props.theme.brown['brown-400']};
  font-family: ${props => props.theme['font-family'].baloo};
  font-size: 2rem;
  display: flex;
  margin-top: 50%;
}

  @media (max-width: 1205px) {
      max-width: 98%;
  }

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
  }
  
`

export const SelectedCoffeesContainer = styled.div`
display: flex;
flex-direction: column;
width: 60%;
gap: 1rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const SelectedCoffees = styled.div`
background-color: ${props => props.theme.gray['gray-200']};
width: 100%;
border-radius: 0.5rem 2.188rem ;
`
export const SelectedCoffeesBottom = styled.div`
display: grid;
padding-top: 32px;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto;
margin: -1.25rem 2.5rem 2.5rem 2.5rem;
gap: 0.7rem;
font-family: ${props => props.theme['font-family'].roboto};
color: ${props => props.theme.brown['brown-400']};


span {
  display: flex;
  justify-content: end;
  font-size: 1rem;
}

label {
  display: flex;
  font-size: 0.875rem;
}

h3 {
  color: ${props => props.theme.brown['brown-600']};
  font-size: 1.25rem;
}

h3:nth-of-type(2) {
  display: flex;
  justify-content: end;
}

@media (max-width: 550px) {
width: 100%;
max-width: 100%;
padding: 1rem;
margin: auto;

}
`
export const ConfirmCheckoutButtom = styled.button`
text-decoration: none;
display: flex;
border: none;
justify-content: center;
grid-column: 1 / -1;
background-color: ${props => props.theme.yellow['yellow-500']};
border-radius: 6px;
margin: 0.375rem 0;
height: 100%;

cursor: pointer;

&:hover {
  background-color: ${props => props.theme.yellow['yellow-700']};
}

p {
  margin-top: 0.875rem;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.white};
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: bold;
  }
`
