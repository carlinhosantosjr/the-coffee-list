import { CoffeeCard } from '../../components/CoffeeCard'
import { ShowcaseHome } from '../../components/ShowcaseHome'
import { CoffeeListContainer, HomeContainer } from './styles'
import { coffees } from '../../mocks/coffees'

const coffeeListMocked = coffees

export function Home() {
  return (
    <HomeContainer>
      <ShowcaseHome />
      <h2>Nossos cafés</h2>
      <CoffeeListContainer>
        {coffeeListMocked.map((coffee) =>
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            image={coffee.image}
            name={coffee.name}
            description={coffee.description}
            tags={coffee.tags}
            value={coffee.value}
          />)}
      </CoffeeListContainer>
    </HomeContainer>
  )
}
