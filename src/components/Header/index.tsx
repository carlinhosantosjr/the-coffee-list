import { useContext } from 'react'
import logo from '../../assets/logo.svg'
import { OrderedCoffeesContext } from '../../contexts/OrderedCoffeesContext'
import { HeaderContainer, LocationInfoContainer, NavLinkStyled } from './styles'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { Link } from 'react-router-dom'

export function Header() {
  const theme = useTheme()
  const { OrderState } =
  useContext(OrderedCoffeesContext)

  const quantityLabel =
  OrderState.orderedCoffesState.reduce((total, coffee) => {
    return total + coffee.quantity
  }, 0)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <LocationInfoContainer>
          <MapPin size={22} weight="fill" color={theme.purple['purple-500']} />
          <span>Porto Alegre, RS</span>
        </LocationInfoContainer>
        <NavLinkStyled to="/checkout">
          <ShoppingCart
            size={22} weight="fill"
            color={theme.yellow['yellow-700']}
          />
          <label>{quantityLabel}</label>
        </NavLinkStyled>
      </nav>
    </HeaderContainer>
  )
}
