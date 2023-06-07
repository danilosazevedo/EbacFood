import React, { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { open, openItemDetail } from '../../store/reducers/cart'
import logo from '../../Assets/Imgs/logo.png'
import cover from '../../Assets/Imgs/Rectangle.png'
import Cart from '../../Components/Cart'
import ItemPerfil from '../../Components/ItemPerfil'

import { useParams } from 'react-router-dom'

import {
  Cover,
  Hero,
  HeroImage,
  Product,
  ProductList,
  SpanHome
} from './styles'
import { useGetCardapioQuery } from '../../Services/api'
import { Cardapio } from '../Home'

export type Props = {
  item: Cardapio
}

const Perfil = () => {
  const { id } = useParams()
  const { data: perfil } = useGetCardapioQuery(id!)

  const cardapio = perfil?.cardapio as unknown as Cardapio[]

  const dispatch = useDispatch()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 100) + '...'
    }
    return descricao
  }

  const itemDetail = ({ item }: Props) => {
    dispatch(openItemDetail(item))
  }

  return (
    <>
      <Hero>
        <SpanHome to={`/`}>Restaurantes</SpanHome>
        <img src={logo} alt="" />
        <span onClick={() => dispatch(open())}>0 produto(s) no carrinho</span>
      </Hero>
      <HeroImage>
        <Cover>
          <img src={cover} alt="" />
        </Cover>
        <span>{perfil?.tipo}</span>
        <h2>{perfil?.titulo}</h2>
        <img src={perfil?.capa} alt="" />
      </HeroImage>
      <ProductList className="container">
        {cardapio?.map((c) => (
          <Product key={c.id} onClick={itemDetail}>
            <img src={c.foto} alt="" />
            <h3>{c.nome}</h3>
            <p>{getDescricao(c.descricao)}</p>
            <button>Adicionar ao carrinho</button>
          </Product>
        ))}
      </ProductList>
      <Cart />
      <ItemPerfil />
    </>
  )
}

export default Perfil
