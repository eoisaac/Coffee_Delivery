import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
`

export const IntroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  img {
    width: clamp(14rem, 35vw, 476px);
    height: clamp(10.6rem, 25vw, 347.6px);
    animation: rightToLeft 1s;
  }

  @media (min-width: 768px) {
    padding: 5.75rem 0;
    flex-direction: row;
    align-items: flex-start;
  }
`

export const IntroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: leftToRight 1s;
`

export const ContentTitle = styled.div`
  max-width: 580px;
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 12vw, 3rem);
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  strong {
    font-size: clamp(1rem, 5vw, 1.25rem);
    font-weight: 400;
  }
`

export const ItemsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 1.25rem 2.5rem;
`

export const ItemsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const ITEM_BG_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text',
} as const

interface ItemsProps {
  itemBGColor: keyof typeof ITEM_BG_COLORS
}

export const Item = styled.li<ItemsProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  span {
    padding: 0.4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: ${(props) => props.theme.background};
    background-color: ${(props) =>
      props.theme[ITEM_BG_COLORS[props.itemBGColor]]};
  }
`
export const CoffeesContainer = styled.section`
  h1 {
    margin-bottom: 3.375rem;
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeesGrid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 256px));
  justify-content: center;
  justify-items: center;
  gap: 2.5rem 2rem;
  list-style: none;
`
