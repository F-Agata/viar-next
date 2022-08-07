import styled from 'styled-components'

import Box from '../styles/Box'
import Link from '../styles/Link'

const Logo = () => (
  <BoxLogo>
    <Link href={'/home'}>
      <LogoIcon src={'logo.svg'} alt={'logo'}/>
    </Link>
  </BoxLogo>
)

export default Logo

const BoxLogo = styled(Box)`
  height: 50px;
  @media (min-width: 768px) {
    height: 70px;
  }
`

const LogoIcon = styled.img`
  height: 50px;
  @media (min-width: 768px) {
    height: 70px;
  }
`
