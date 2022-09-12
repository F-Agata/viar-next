import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Logo from '../Logo'
import SocialIcons from './SocialIcons'
import AccountIcons from './AccountIcons'

import Box from '../../styles/Box'
import Link from '../../styles/Link'
import TitleAndText from '../../styles/TitleAndText'

const NavSmall = ({ menuItems, changeNav }) => {
  const needCloseIcon = true

  const menuItem = menuItems.map((item) => (
    <StyledNavigationLi key={item.id}>
      <Link href={`/${item.id}`} onClick={changeNav}>
        <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
      </Link>
    </StyledNavigationLi>
  ))

  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      width={'100%'}
      height={'100vh'}
      zIndex={'999'}
    >
      <Box
        onClick={changeNav}
        position={'fixed'}
        top={0}
        left={0}
        bg={'colorWhite'}
        opacity={'80%'}
        width={'100%'}
        height={'100vh'}
      />
      <Box
        position={'fixed'}
        top={0}
        left={0}
        bg={'colorWhite'}
        width={'100%'}
        p={'40px'}
        borderBottom={'1px solid '}
        borderColor={'colorSecondary'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <Box
          width={'100%'}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          pb={40}
        >
          <Logo />
          <AccountIcons changeNav={changeNav} needCloseIcon={needCloseIcon} />
        </Box>

        <StyledNavigationUl>{menuItem}</StyledNavigationUl>
        <SocialIcons changeNav={changeNav} />
      </Box>
    </Box>
  )
}

export default NavSmall

const StyledNavigationUl = styled.ul`
  padding-bottom: 40px;
`

const StyledNavigationLi = styled.li`
    padding: 20px 0;
   list-style: none;
  cursor: pointer;
  transition: 0.3s;
   :hover p {
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights.fontBold};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
   }
  }
`
