import styled from 'styled-components'

export const CoffeeContainer = styled.li`
  width: 100%;
  max-width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem 1.25rem 1.5rem;
  text-align: center;
  border-radius: 6px 36px;
  animation: bottomToTop 1s;
  background-color: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
    height: 120px;
    position: relative;
    top: -20px;
  }

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 8px;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const BuyContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`

export const CoffeePrice = styled.div`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const BuyButtons = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`
export const CartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem;
  cursor: pointer;
  line-height: 0;
  font-size: 0.875rem;
  outline: 0;
  transition: all 0.2s ease-in-out;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['purple-light']};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
