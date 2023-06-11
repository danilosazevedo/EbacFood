import { ModalContainer, ModalItem, Overlay } from './styles'
import pizza from '../../Assets/Imgs/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeItemDetail, openItemDetail } from '../../store/reducers/cart'
import { Cardapio } from '../../Pages/Home'

export type Props = {
  item: Cardapio
}

const ItemPerfil = () => {
  const ItemPerfilOpen = useSelector(
    (state: RootReducer) => state.cart.isOpenItemDetail
  )

  const dispatch = useDispatch()

  return (
    <ModalContainer className={ItemPerfilOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(closeItemDetail())} />
      <ModalItem>
        <img src={pizza} alt="" />
        <div>
          <button onClick={() => dispatch(closeItemDetail())} id="close" />
          <h2>Pizza Marguerita</h2>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br /> Serve: de 2 a 3 pessoas
          </p>
          <button>Adicionar ao carrinho - R$ {'60,90'}</button>
        </div>
      </ModalItem>
    </ModalContainer>
  )
}

export default ItemPerfil
