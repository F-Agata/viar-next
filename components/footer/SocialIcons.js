import styled, { css } from 'styled-components'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import Box from '../../styles/Box'
import BoxIcon from '../../styles/BoxIcon'
import Link from '../../styles/Link'
import TitleAndText from '../../styles/TitleAndText'

const SocialIcons = () => (
  <Box>
    <TitleAndText variant={'textSmall'}> Socialmedia</TitleAndText>
    <BoxWrapperSocialIcons>
      <Link href={'/#'}>
        <BoxIcon width={40} height={40} bg={'colorSecondary'} ml={0}>
          <StyledFaFacebook />
        </BoxIcon>
      </Link>
      <Link href={'/#'}>
        <BoxIcon width={40} height={40} bg={'colorSecondary'} ml={10}>
          <StyledFaTwitter />
        </BoxIcon>
      </Link>
      <Link href={'/#'}>
        <BoxIcon width={40} height={40} bg={'colorSecondary'} ml={10}>
          <StyledFaInstagram />
        </BoxIcon>
      </Link>
    </BoxWrapperSocialIcons>
  </Box>
)

export default SocialIcons

const BoxWrapperSocialIcons = styled(Box)`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledFaFacebook = styled(FaFacebook)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
  `};
`

const StyledFaTwitter = styled(FaTwitter)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
  `};
`

const StyledFaInstagram = styled(FaInstagram)`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorSecondary};
    color: ${theme.colors.colorWhite};
  `};
`
