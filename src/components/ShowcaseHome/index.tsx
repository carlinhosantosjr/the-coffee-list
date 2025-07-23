import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import showcaseLogo from '../../assets/showcaseImg.svg'
import { ShowcaseContainer, ShowcaseIcons, ShowcaseTitle } from './styles'

export function ShowcaseHome() {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver,
          a qualquer hora
        </h3>
        <ShowcaseIcons>
          <p>
            <span>
              <ShoppingCart size={16} color="white" weight="fill" />
            </span>
            Compra simples e segura
          </p>
          <p>
            <span>
              <Package size={16} color="white" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </p>
          <p>
            <span>
              <Timer size={16} color="white" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </p>
          <p>
            <span>
              <Coffee size={16} color="white" weight="fill" />
            </span>
            O café chega fresquinho até você
          </p>
        </ShowcaseIcons>
      </ShowcaseTitle>
      <img src={showcaseLogo} alt="" />
    </ShowcaseContainer>
  )
}
