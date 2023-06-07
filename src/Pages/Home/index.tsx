import Banner from '../../Components/Banner'
import RestaurantList from '../../Components/RestaurantList'

export type Restaurant = {
  id: number
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string

  cardapio: {
    id: number
    nome: string
    foto: string
    preco: number
    descricao: string
    porcao: string
  }
}

export type Cardapio = {
  id: number
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string
}

const Home = () => {
  return (
    <>
      <Banner />
      <RestaurantList />
    </>
  )
}

export default Home
