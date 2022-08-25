import styled from 'styled-components'
import { FieldsetContainer } from './components/OrderCheckoutForm/styles'

export const CheckoutContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 868px) {
      flex-direction: row;
    }
  }
`
export const CoffeeOrderContainer = styled(FieldsetContainer)`
  height: 70%;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 6px;

  @media (min-width: 868px) {
    border-radius: 6px 44px;
  }
`

export const OrderList = styled.ul`
  flex: 1;
  max-height: 300px;
  overflow-y: auto;
  list-style: none;
`

export const OrderResume = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  div {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    &:last-child {
      font-family: 'Baloo 2', cursive;
      font-size: 1.25rem;
    }
  }
`

export const OrderFooter = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const EmptyAlert = styled.div`
  max-height: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;

  a {
    display: block;
  }
`
