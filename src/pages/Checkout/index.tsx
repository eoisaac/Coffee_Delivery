import {
  CheckoutContainer,
  CoffeeOrderContainer,
  EmptyAlert,
  OrderFooter,
  OrderList,
  OrderResume,
} from './styles'
import { OrderCheckoutForm } from './components/OrderCheckoutForm'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Coffee, ShoppingCart } from 'phosphor-react'
import { Header } from './components/OrderCheckoutForm/styles'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'
import { OrderCoffee } from './components/OrderCoffee'
import { Link } from 'react-router-dom'

export const Checkout = () => {
  const { cart } = useContext(OrderContext)

  const cartIsEmpty = cart.length <= 0

  const orderCheckoutFormSchema = zod.object({
    cep: zod.string().min(8, 'O CEP inválido. Mínimo 8 caracteres'),
    street: zod.string().min(1, 'Informe o nome da rua'),
    number: zod.string().min(1, 'Informe o número do endereço'),
    complement: zod.string().min(0),
    district: zod.string().min(1, 'Informe o nome do bairro'),
    city: zod.string().min(1, 'Informe o nome da cidade'),
    state: zod
      .string()
      .min(2, 'Informe a siga do estado')
      .max(2, 'Insira apenas a siga do estado'),
    paymentMethod: zod.enum(['credit', 'debit', 'money'], {
      invalid_type_error: 'Selecione a forma de pagamento',
    }),
  })

  type OrderCheckoutFormData = zod.infer<typeof orderCheckoutFormSchema>

  const orderCheckoutForm = useForm<OrderCheckoutFormData>({
    resolver: zodResolver(orderCheckoutFormSchema),
  })

  const { handleSubmit, reset, formState } = orderCheckoutForm
  const { errors } = formState
  const orderCheckoutFormErrors = errors

  const handleOrderCheckoutSubmit = (data: OrderCheckoutFormData) => {
    reset()
  }

  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>

      <form onSubmit={handleSubmit(handleOrderCheckoutSubmit)}>
        <FormProvider {...orderCheckoutForm}>
          <OrderCheckoutForm formErrors={orderCheckoutFormErrors} />
        </FormProvider>

        <CoffeeOrderContainer>
          <Header iconColor="gray">
            <Coffee size={22} />
            <div>
              <legend>Cafés Selecionados</legend>
              <span>Aqui estão todos os cafés do seu pedido</span>
            </div>
          </Header>

          {cartIsEmpty ? (
            <EmptyAlert>
              <ShoppingCart size={60} />
              <div>
                <strong>Oops... Seu carrinho está vazio!</strong>
                <Link to="/"> ver cafés </Link>
              </div>
            </EmptyAlert>
          ) : (
            <OrderList>
              {cart.map((coffee) => {
                return (
                  <OrderCoffee
                    key={coffee.id}
                    id={coffee.id}
                    name={coffee.name}
                    price={coffee.price}
                    amount={coffee.amount}
                    image={coffee.image}
                  />
                )
              })}
            </OrderList>
          )}

          <OrderFooter>
            <OrderResume>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </OrderResume>
            <button type="submit">Confirmar Pedido</button>
          </OrderFooter>
        </CoffeeOrderContainer>
      </form>
    </CheckoutContainer>
  )
}
