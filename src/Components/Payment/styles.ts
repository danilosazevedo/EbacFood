import styled from 'styled-components'
import { cores } from '../../styles'
import remove from '../../Assets/Imgs/del.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const SideBar = styled.aside`
  background-color: ${cores.principal};
  z-index: 1;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 360px;
  width: 100%;

  > div {
    span {
      margin-left: 160px;
    }
    font-weight: bold;
    color: #fff;
  }

  button {
    margin-top: 32px;
    width: 100%;
    background-color: ${cores.fundo2};
    border: none;
    height: 24px;
    color: ${cores.principal};
    font-weight: bold;
    cursor: pointer;
  }
`
export const CardItem = styled.li`
  display: flex;
  width: 98%;
  height: 100px;
  background-color: ${cores.fundo2};
  margin-bottom: 16px;

  img {
    width: 90px;
    height: 80px;
    margin: 8px;
  }

  h3 {
    margin: 8px 0 32px;
  }

  #removeCart {
    background-image: url(${remove});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    margin: 76px 8px 8px 40px;
  }
`
