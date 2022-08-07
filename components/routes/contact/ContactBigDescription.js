import styled, { css } from 'styled-components'

import ContactTextPartWithImg from './ContactTextPartWithImg'
import Form from './form/Form'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const ContactBigDescription = () => (
  <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <BoxBg>
      <ContactTextPartWithImg />
      <BgxBgBorder>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'0px 20px'}
        >
          <TitleAndText
            variant={'title4Uppercase'}
            textAlign={'center'}
            mb={20}
          >
            Duis a urna purus
          </TitleAndText>

          <Form />
        </Box>
      </BgxBgBorder>
    </BoxBg>
  </Box>
)

export default ContactBigDescription

const BoxBg = styled(Box)`
  padding-bottom: 30px;
  width: 100%;
  // border: 2px burlywood solid;
  background-image: url('contact/menWithTablet.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    background-position: center top 100px;
  }
`

const BgxBgBorder = styled(Box)`
  width: 688px;
  max-width: 1140px;
  padding: 40px 0;
  margin-top: 40px;
  border-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorLightBg};
    outline: ${theme.colors.colorLightBg} solid 8px;
    border: ${theme.colors.colorWhite} solid 2px;
  `};
  @media (min-width: 1024px) {
    width: 1000px;
    margin-top: 40px;
  }
  @media (min-width: 1140px) {
    width: 1100px;
    margin-top: 80px;
  }
  @media (min-width: 1366px) {
    margin-top: 120px;
  }
`
