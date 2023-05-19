import logo from '../../Assets/Imgs/logo.png'
import face from '../../Assets/Imgs/Facebook.png'
import twitter from '../../Assets/Imgs/Twitter.png'
import insta from '../../Assets/Imgs/Instagram.png'

import { Creditos, Footer as Foot, SocialLinks } from './styles'

const Footer = () => {
  return (
    <Foot>
      <img src={logo} alt="" />
      <SocialLinks>
        <li>
          <a href="">
            <img src={face} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={insta} alt="" />
          </a>
        </li>
      </SocialLinks>
      <Creditos>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Creditos>
    </Foot>
  )
}

export default Footer
