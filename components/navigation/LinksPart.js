import styled, { css } from 'styled-components'

import Box from '../../styles/Box'
import Link from '../../styles/Link'
import TitleAndText from '../../styles/TitleAndText'
import Btn from '../../styles/Btn'

const LinksPart = ({ menuItems }) => {
  const menuItem = menuItems.map((item) => (
    <StyledNavigationLi key={item.id}>
      <Link href={`/${item.id}`}>
        <TitleAndText variant={'textSmall'}> {item.name}</TitleAndText>
      </Link>
    </StyledNavigationLi>
  ))

  return (
    <Box
      // border={'orange 2px solid'}
      flexGrow={'1'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <StyledNavigationUl>{menuItem}</StyledNavigationUl>
    </Box>
  )
}

export default LinksPart

const StyledNavigationUl = styled.ul`
  //border: olivedrab 2px solid;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`

const StyledNavigationLi = styled.li`
  //border: blueviolet 2px solid;
  list-style: none;
  margin-left: 10px;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights.fontBold};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
  }
  :active {
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights.fontBold};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `};
    :focus {
      ${({ theme }) => css`
        font-weight: ${theme.fontWeights.fontBold};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      `};
    }
  }
`
