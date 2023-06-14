import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  close,
  delivery,
  payment,
  confirmation,
  backCart,
  backDelivery,
  remove
} from '../../store/reducers/cart'

import {
  CardItem,
  CartContainer,
  CartInfo,
  Confirmation,
  DeliveryInfo,
  Overlay,
  PaymentInfo,
  SideBar
} from './styles'

const Cart = () => {
  const { isOpen, isCart, isDelivery, isPayment, isConfirmation } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const itemsCart = useSelector((state: RootReducer) => state.cart.items)
  console.log(itemsCart)

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return itemsCart.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.preco
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <CartInfo id="cart" className={isCart ? 'is-open' : ''}>
          <ul>
            {itemsCart.map((i) => (
              <CardItem key={i.id}>
                <img src={i.foto} alt="" />
                <div>
                  <h3>{i.nome}</h3>
                  <span>R$ {i.preco}</span>
                </div>
                <button
                  onClick={() => dispatch(remove(i.id))}
                  id="removeCart"
                />
              </CardItem>
            ))}
          </ul>
          <div id="total">
            Valor Total <span>{formataPreco(getTotalPrice())}</span>
            <button onClick={() => dispatch(delivery())}>
              Continuar com a entrega
            </button>
          </div>
        </CartInfo>
        <DeliveryInfo id="delivery" className={isDelivery ? 'is-open' : ''}>
          Entrega <br />
          <br />
          Quem irá receber <br />
          <input type="text" />
          Endereço <br />
          <input type="text" />
          Cidade <br />
          <input type="text" />
          <span>CEP</span> Número
          <br />
          <input id="cep" type="text" />
          <input id="number" type="text" />
          <br />
          Complemento <br />
          <input type="text" />
          <button onClick={() => dispatch(payment())}>
            Continuar com o pagamento
          </button>
          <button onClick={() => dispatch(backCart())}>
            Voltar para o carrinho
          </button>
        </DeliveryInfo>
        <PaymentInfo id="delivery" className={isPayment ? 'is-open' : ''}>
          Pagamento - Valor a pagar {formataPreco(getTotalPrice())} <br />
          <br />
          Nome do Cartão <br />
          <input type="text" />
          <span>Número do Cartão</span> CVV
          <br />
          <input id="numbercard" type="text" />
          <input id="cvvcard" type="text" />
          <br />
          Mês &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Ano
          <br />
          <input id="mes" type="text" />
          <input id="ano" type="text" />
          <br />
          <button onClick={() => dispatch(confirmation())}>
            Finalizar Pagamento
          </button>
          <button onClick={() => dispatch(backDelivery())}>
            Voltar para o endereço
          </button>
        </PaymentInfo>
        <Confirmation id="delivery" className={isConfirmation ? 'is-open' : ''}>
          Pedido Realizado - {'Numero'} <br />
          <br />
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido. <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br /> <br /> Lembre-se da importância de higienizar as mãos após o
            recebimento do pedido, garantindo assim sua segurança e bem-estar
            durante a refeição. <br /> <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <button onClick={() => dispatch(close())}>Concluir</button>
        </Confirmation>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
