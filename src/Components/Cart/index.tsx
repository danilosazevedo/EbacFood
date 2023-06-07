import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  close,
  delivery,
  payment,
  confirmation,
  backCart,
  backDelivery
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

import pizza from '../../Assets/Imgs/pizza.png'

const Cart = () => {
  const { isOpen, isCart, isDelivery, isPayment, isConfirmation } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <CartInfo id="cart" className={isCart ? 'is-open' : ''}>
          <ul>
            <CardItem>
              <img src={pizza} alt="" />
              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
              <button id="removeCart" />
            </CardItem>
            <CardItem>
              <img src={pizza} alt="" />
              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
              <button id="removeCart" />
            </CardItem>
            <CardItem>
              <img src={pizza} alt="" />
              <div>
                <h3>Pizza Marguerita</h3>
                <span>R$ 60,90</span>
              </div>
              <button id="removeCart" />
            </CardItem>
          </ul>
          <div id="total">
            Valor Total <span>R$ 182,70</span>
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
          Pagamento - Valor a pagar R$ {'190,00'} <br />
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
