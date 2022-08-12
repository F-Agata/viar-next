import styled, { css } from 'styled-components'

import { AiOutlineWhatsApp } from 'react-icons/ai'

import Box from '../../../../styles/Box'
import Btn from '../../../../styles/Btn'
import Link from '../../../../styles/Link'
import TitleAndText from '../../../../styles/TitleAndText'

const DoYouWantToChat = () => {
  return (
    <Box
      width={'340px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={{ _: 'center', tablet: 'flex-start' }}
      alignItems={{ _: 'center', tablet: 'center' }}
      mb={40}
      p={'0px  20px'}
      position={'relative'}
    >
      <Box width={'300px'}>
        <TitleAndText
          width={'300px'}
          variant={'title2Uppercase'}
          textAlign={{ _: 'center', tablet: 'left' }}
          mb={20}
        >
          How can you contact us?
        </TitleAndText>
      </Box>
      <BoxWrapImg>
        <QuestionMarksImg
          src={'contact/questionMarks.png'}
          alt={'questionMarks'}
        />
      </BoxWrapImg>

      <BoxBgBorder>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'0px 20px'}
        >
          <TitleAndText
            variant={'textLarge'}
            textAlign={{ _: 'center', tablet: 'left' }}
            mb={20}
          >
            Do you want to chat?
          </TitleAndText>
          <TitleAndText
            variant={'textSmall'}
            textAlign={{ _: 'center', tablet: 'left' }}
            mb={20}
          >
            Nulla lobortis metus sed massa imperdiet, a blandit ligula
            tincidunt.
          </TitleAndText>
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Link href={`/#`}>
              <Btn variant="orangeDark" m={'20px 0'} width={'100%'}>
                <StyledAiOutlineWhatsApp /> WhatsApp
              </Btn>
            </Link>
          </Box>
        </Box>
      </BoxBgBorder>
    </Box>
  )
}

export default DoYouWantToChat

const BoxBgBorder = styled(Box)`
  padding: 80px 0 20px 0;
  margin-top: 120px;
  border-radius: 8px;
  ${({ theme }) => css`
    background-color: ${theme.colors.colorLightBg};
    outline: ${theme.colors.colorLightBg} solid 8px;
    border: ${theme.colors.colorWhite} solid 2px;
  `};
`

const BoxWrapImg = styled(Box)`
  position: absolute;
  top: 240px;
  left: 0;
  @media (min-width: 768px) {
    top: 220px;
  }
`

const QuestionMarksImg = styled.img`
  width: 120%;
`

const StyledAiOutlineWhatsApp = styled(AiOutlineWhatsApp)`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  ${({ theme }) => css`
    color: ${theme.colors.colorWhite};
  `};
`
