import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const ButtonLargeAndLuminous = () => {
  return (
    <Link href={`/contact`}>
      <WrappButtonLargeAndLuminous>
        <TitleAndText
          variant={'title4Uppercase'}
          color={'colorWhite'}
          textAlign={'Center'}
          mb={20}
        >
          {' '}
          do you have questions?
        </TitleAndText>
        <TitleAndText
          variant={'textSmall'}
          color={'colorPrimary'}
          textAlign={'Center'}
        >
          {' '}
          Use the FAQ or contact us.{' '}
        </TitleAndText>
        <TitleAndText
          variant={'textSmall'}
          color={'colorPrimary'}
          textAlign={'Center'}
        >
          {' '}
          We will answer all your questions{' '}
        </TitleAndText>
      </WrappButtonLargeAndLuminous>
    </Link>
  )
}

export default ButtonLargeAndLuminous

const WrappButtonLargeAndLuminous = styled(Box)`
  min-width: 330px;
  max-width: 478px;
  padding: 20px 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 0px rgb(232, 113, 69),
    3px 3px 29px rgba(252, 99, 95, 1);
  ${({ theme }) => css`
    background: ${theme.gradients.gradientBtn};
  `};
  @media (min-width: 568px) {
    padding: 40px 40px;
  }
`
