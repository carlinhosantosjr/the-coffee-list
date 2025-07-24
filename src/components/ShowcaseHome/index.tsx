import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from '@phosphor-icons/react'
import showcaseLogo from '../../assets/showcaseImg.png'
import { ImageContainer, ShowcaseContainer, ShowcaseIcons, ShowcaseTitle } from './styles'

export function ShowcaseHome() {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o The Coffee List você recebe seu café onde estiver,
          a qualquer hora
        </h3>
        <ShowcaseIcons>
          <p>
            <span>
              <ShoppingCartIcon size={16} color="white" weight="fill" />
            </span>
            Compra simples e segura
          </p>
          <p>
            <span>
              <PackageIcon size={16} color="white" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </p>
          <p>
            <span>
              <TimerIcon size={16} color="white" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </p>
          <p>
            <span>
              <CoffeeIcon size={16} color="white" weight="fill" />
            </span>
            O café chega fresquinho até você
          </p>
        </ShowcaseIcons>
      </ShowcaseTitle>
      <ImageContainer>
        <img src={showcaseLogo} alt="" />
      </ImageContainer>
    </ShowcaseContainer>
  )
}
