import React, { useState } from 'react'
import styled from 'styled-components'
import Box from '../../styles/Box'
import Logo from '../Logo'
import AccountIcons from './AccountIcons'
import SocialIcons from './SocialIcons'
import menuItems from './menuItems'
import LinksPart from './LinksPart'
import NavSmall from './NavSmall'

import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

const Navigation = () => {
  const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)

  const needOpenIcon = true
  const modificationMenuSize = useBetterMediaQuery('(min-width: 768px)')
  const addSocialIcons = useBetterMediaQuery('(min-width: 1024px)')

  const changeNav = () => {
    setSmallNavIsOpen(!smallNavIsOpen)
  }

  return (
    <BoxNavigation>
      <Logo />
      {addSocialIcons && <SocialIcons bigMenu />}
      {!modificationMenuSize && (
        <AccountIcons changeNav={changeNav} needOpenIcon={needOpenIcon} />
      )}
      {modificationMenuSize && <LinksPart menuItems={menuItems} />}
      {modificationMenuSize && <AccountIcons />}
      {!modificationMenuSize && smallNavIsOpen ? (
        <NavSmall
          menuItems={menuItems}
          setSmallNavIsOpen={setSmallNavIsOpen}
          changeNav={changeNav}
        />
      ) : null}
    </BoxNavigation>
  )
}

export default Navigation

const BoxNavigation = styled(Box)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  margin: 0 auto;
  z-index: 100;
  background-color: transparent;
`
