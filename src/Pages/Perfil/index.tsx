import logo from '../../Assets/Imgs/logo.png'
import imgPerfil from '../../Assets/Imgs/perfil.png'
import pizza from '../../Assets/Imgs/pizza.png'
import cover from '../../Assets/Imgs/Rectangle.png'
import Cart from '../../Components/Cart'
import ItemPerfil from '../../Components/ItemPerfil'

import { Cover, Hero, HeroImage, Product, ProductList } from './styles'

const perfil = () => {
  return (
    <>
      <Hero>
        <span>Restaurantes</span>
        <img src={logo} alt="" />
        <span>0 produto(s) no carrinho</span>
      </Hero>
      <HeroImage>
        <Cover>
          <img src={cover} alt="" />
        </Cover>
        <span>Italiana</span>
        <h2>La Dolce Vita Trattoria</h2>
        <img src={imgPerfil} alt="" />
      </HeroImage>
      <ProductList className="container">
        <Product>
          <img src={pizza} alt="" />
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Adicionar ao carrinho</button>
        </Product>
        <Product>
          <img src={pizza} alt="" />
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Adicionar ao carrinho</button>
        </Product>
        <Product>
          <img src={pizza} alt="" />
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Adicionar ao carrinho</button>
        </Product>
        <Product>
          <img src={pizza} alt="" />
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Adicionar ao carrinho</button>
        </Product>
        <Product>
          <img src={pizza} alt="" />
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Adicionar ao carrinho</button>
        </Product>
        <Product>
          <img src={pizza} alt="" />
          <h3>Pizza Marguerita</h3>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <button>Adicionar ao carrinho</button>
        </Product>
      </ProductList>
      <Cart />
      <ItemPerfil />
    </>
  )
}

export default perfil
