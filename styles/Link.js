import NextLink from 'next/link'

import styled from 'styled-components'

const Link = ({ children, href, ...rest }) => (
  <NextLink href={href}>
    <LinkText {...rest}>{children}</LinkText>
  </NextLink>
)

export default Link

const LinkText = styled.a`
  display: inherit;
  text-decoration: none;
  cursor: pointer;
`
