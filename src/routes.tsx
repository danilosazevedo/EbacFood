import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import PerfilRestaurant from './Pages/Perfil'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<PerfilRestaurant />} />
    </Routes>
  )
}

export default Rotas
