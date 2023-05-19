import styled from 'styled-components'
import { cores } from '../../styles'

export const Restaurants = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1fr;
`

export const RestaurantCard = styled.div`
  width: 472px;
  height: 420px;
  border: 2px solid;
  align-items: center;
  text-align: justify;

  div {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      font-weight: bold;
    }

    img {
      margin: 8px;
      width: 21px;
      height: 20px;
    }
  }

  img {
    width: 100%;
  }

  h2,
  p {
    margin: 8px;
  }

  button {
    margin: 8px;
    width: 82px;
    height: 24px;
    background-color: ${cores.principal};
    color: #fff;
    border: none;
  }
`
