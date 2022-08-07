import styled, { css } from 'styled-components'

import ContactTextPartWithImg from './ContactTextPartWithImg'
import Form from './form/Form'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

const ContactSmallDescription = () => {
  return (
    <Box
      // border={'green 2px solid'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'strench'}
      p={'40px 0px'}
    >
      <ContactTextPartWithImg />
      <Box
        // border={'yellow 2px solid'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
        p={'0 20px'}
      >
        <DescriptionPartImg src={'contact/menWithTablet.png'} alt={'photo'} />
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
      </Box>
    </Box>
  )
}

export default ContactSmallDescription

const BgxBgBorder = styled(Box)`
  width: 335px;
  padding: 40px 0;
  margin-top: -18%;
  border-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorLightBg};
    outline: ${theme.colors.colorLightBg} solid 8px;
    border: ${theme.colors.colorWhite} solid 2px;
  `};
  @media (min-width: 568px) {
    width: 488px;
  }
  @media (min-width: 768px) {
    width: 688px;
  }
`

const DescriptionPartImg = styled.img`
  //border: 2px solid blueviolet;
  width: 200%;
  margin-left: -50%;
  margin-right: -50%;
`
