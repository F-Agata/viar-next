import styled, { css } from 'styled-components'

import { BiEnvelope } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'

import Logo from '../Logo'
import SocialIcons from './SocialIcons'

import Box from '../../styles/Box'
import TitleAndText from '../../styles/TitleAndText'

const Footer = () => (
  <Box width={'100%'}>
    <Box
      bg={'colorLightBg'}
      width={'100%'}
      p={{ _: '40px 20px', tablet: '40px 40px' }}
      flexDirection={{ _: 'column', tablet: 'row' }}
      flexWrap={'wrap'}
      justifyContent={{ _: 'flex-start', tablet: 'space-between' }}
      alignItems={{ _: 'center', tablet: 'stretch' }}
    >

      <Logo/>
      <Box
        p={'20px 0'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        alignItems={'left'}
      >
        <Box
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          p={'10px 0px'}
        >
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mr={10}>
            <StyledBsTelephone/>
          </Box>
          <TitleAndText variant={'textSmall'}> + 48 600 500 400</TitleAndText>

        </Box>

        <Box
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          p={'10px 0px'}
        >
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mr={10}>
            <StyledBiEnvelope/>
          </Box>
          <TitleAndText variant={'textSmall'}> office@viarArtCanvas.com</TitleAndText>
        </Box>

        <Box
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          p={'10px 0px'}
        >
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mr={10}>
            <StyledMdOutlineLocationOn/>
          </Box>
          <TitleAndText variant={'textSmall'}> Riga, Lubanas 65, LV1073
            Daugavpils, Stacijas 129R,
            LV5401
          </TitleAndText>
        </Box>
      </Box>
      <Box order={{ _: '3', tablet: '2' }}>
        <SocialIcons/>
      </Box>
    </Box>
    <Box
      bg={'colorPrimary'}
      width={'100%'}
      p={{ _: '20px 20px 0 20px', tablet: '20px 40px 0 40px' }}
      display={'flex'}
      flexDirection={{ _: 'column', tablet: 'row' }}
      flexWrap={'wrap'}
      justifyContent={{ _: 'flex-start', tablet: 'space-between' }}
      alignItems={{ _: 'center', tablet: 'center' }}
    >
      <TitleAndText variant={'textSmall'} opacity={'50%'} color={'colorWhite'} mb={20}>© 2022 viarArtCanvas.com
        <TitleAndTextStyledToTop as="span" variant={'textSmallVery'} opacity={'50%'} color={'colorWhite'}>
          ®
        </TitleAndTextStyledToTop> </TitleAndText>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mb={20}
      >
        <Box>
          <img src={'footer/visa.png'} alt={'visa'}/>
        </Box>
        <Box ml={40}>
          <img src={'footer/mastercard.png'} alt={'mastercard'}/>
        </Box>
      </Box>
    </Box>
  </Box>
)

export default Footer

const StyledBiEnvelope = styled(BiEnvelope)`
  width: 24px;
  height: 24px;
  background-color: transparent;
  ${({ theme }) => css`
    color: ${theme.colors.colorSecondary};
  `};
`

const StyledBsTelephone = styled(BsTelephone)`
  width: 24px;
  height: 24px;
  background-color: transparent;
  ${({ theme }) => css`
    color: ${theme.colors.colorSecondary};
  `};
`

const StyledMdOutlineLocationOn = styled(MdOutlineLocationOn)`
  width: 24px;
  height: 24px;
  background-color: transparent;
  ${({ theme }) => css`
    color: ${theme.colors.colorSecondary};
  `};
`

const TitleAndTextStyledToTop = styled(TitleAndText)`
  vertical-align: text-top;
`
