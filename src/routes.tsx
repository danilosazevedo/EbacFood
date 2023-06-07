import { Routes, Route } from 'react-router-dom'

import Perfil from './Pages/Perfil'
import Home, { Cardapio } from './Pages/Home'
import { useSelector } from 'react-redux'
import { RootReducer } from './store'

const Rotas = () => {
  const item = useSelector((state: RootReducer) => state.cart.cartTemp)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<Perfil />} />
    </Routes>
  )
}

export default Rotas
