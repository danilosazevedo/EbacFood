import { CardItem, CartContainer, Overlay, SideBar } from './styles'

import pizza from '../../Assets/Imgs/pizza.png'

const Confirmation = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
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
        <div>
          Valor Total <span>R$ 182,70</span>
          <button>Continuar com a entrega</button>
        </div>
      </SideBar>
    </CartContainer>
  )
}
export default Confirmation
