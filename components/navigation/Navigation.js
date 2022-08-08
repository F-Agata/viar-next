import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { BiCart } from 'react-icons/bi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import Box from '../../styles/Box'
import BoxIcon from '../../styles/BoxIcon'
import Link from '../../styles/Link'
import Logo from '../Logo'
import AccountIcons from './AccountIcons'
import SocialIcons from './SocialIcons'
import menuItems from './menuItems'
import LinksPart from './LinksPart'
import NavSmall from './NavSmall'
import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

const Navigation = () => {
  const [smallNavIsOpen, setSmallNavIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [addShadow, setAddShadow] = useState(false)

  const needOpenIcon = true

  const modificationMenuSize = useBetterMediaQuery('(min-width: 768px)')
  const addSocialIcons = useBetterMediaQuery('(min-width: 1024px)')

  const changeNav = () => {
    setSmallNavIsOpen(!smallNavIsOpen)
  }

  const moveScroll = () => {
    setScrollY(window.pageYOffset)
    if (scrollY > 80) {
      setAddShadow(true)
    } else setAddShadow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', moveScroll)
    return () => window.removeEventListener('scroll', moveScroll)
  }, [scrollY, addShadow])

  return (
    <BoxNavigation addShadow={addShadow}>
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
  ${({ theme, addShadow }) => `
        background: ${addShadow ? theme.colors.colorLightBg95 : 'transparent'};
        box-shadow: ${
          addShadow
            ? '4px 4px 10px rgba(250, 120, 70, 0.25), rgba(173, 135, 128, 0.25) 0px 30px 60px -12px inset, rgba(232, 113, 69, 0.25) 0px 18px 36px -18px inset'
            : 'none'
        };
      `};
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 15px 20px;
  margin: 0 auto;
  z-index: 100;
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`
