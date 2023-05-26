import {
  CardItem,
  CartContainer,
  Confirmation,
  DeliveryInfo,
  Overlay,
  PaymentInfo,
  SideBar
} from './styles'

import pizza from '../../Assets/Imgs/pizza.png'

const Cart = () => {
  return (
    <CartContainer style={{ display: 'flex' }}>
      <Overlay />
      <SideBar>
        <section id="cart" style={{ display: 'block' }}>
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
            <button>Continuar com a entrega</button>
          </div>
        </section>
        <DeliveryInfo id="delivery" style={{ display: 'none' }}>
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
          <button>Continuar com o pagamento</button>
          <button>Voltar para o carrinho</button>
        </DeliveryInfo>
        <PaymentInfo id="delivery" style={{ display: 'none' }}>
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
          <button>Finalizar Pagamento</button>
          <button>Voltar para o endereço</button>
        </PaymentInfo>
        <Confirmation id="delivery" style={{ display: 'none' }}>
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
          <button>Concluir</button>
        </Confirmation>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
