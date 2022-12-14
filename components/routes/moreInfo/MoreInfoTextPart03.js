import styled from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const MoreInfoTextPart03 = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'left'}
      p={{ _: '20px 20px', mobileL: '0px 40px' }}
    >
      <TitleAndText
        variant={'title3Uppercase'}
        textAlign={{ _: 'center', tablet: 'left' }}
        color={'colorSecondary'}
        mb={20}
      >
        {' '}
        <TitleAndText as="span" color={'colorPrimary'}>
          Slide03 Duis ut vulputate{' '}
        </TitleAndText>{' '}
        eget arcu{' '}
      </TitleAndText>

      <Box
        display={'flex'}
        justifyContent={'left'}
        alignItems={'center'}
        mb={20}
      >
        <Box
          width={{ _: '25px', tablet: '30px' }}
          height={{ _: '25px', tablet: '30px' }}
          mr={10}
        >
          <StyledImg src={`painter.png`} alt={'icon'} />
        </Box>
        <TitleAndText variant={'textSmallBold'} textAlign={'left'}>
          <TitleAndText as="span" color={'colorSecondary'}>
            Etiam condimentum{' '}
          </TitleAndText>
          cefficitur tempor blandit justo eu scelerisque nulla id velit iaculis
          congue
        </TitleAndText>
      </Box>

      <Box
        display={'flex'}
        justifyContent={'left'}
        alignItems={'center'}
        mb={20}
      >
        <Box
          width={{ _: '25px', tablet: '30px' }}
          height={{ _: '25px', tablet: '30px' }}
          mr={10}
        >
          <StyledImg src={`painter.png`} alt={'icon'} />
        </Box>

        <TitleAndText
          variant={'textSmallBold'}
          textAlign={'left'}
          color={'colorSecondary'}
        >
          <TitleAndText as="span" color={'colorPrimary'}>
            Quisque sodales sagittis{' '}
          </TitleAndText>
          ornare posuere bibendum.
        </TitleAndText>
      </Box>

      <Box
        display={'flex'}
        justifyContent={'left'}
        alignItems={'center'}
        mb={20}
      >
        <Box
          width={{ _: '25px', tablet: '30px' }}
          height={{ _: '25px', tablet: '30px' }}
          mr={10}
        >
          <StyledImg src={`painter.png`} alt={'icon'} />
        </Box>
        <TitleAndText
          variant={'textSmallBold'}
          textAlign={'left'}
          color={'colorSecondary'}
        >
          <TitleAndText as="span" color={'colorPrimary'}>
            Nunc ac mattis libero, non rhoncus erat.{' '}
          </TitleAndText>
          Sed imperdiet orci a luctus
        </TitleAndText>
      </Box>
      <Box width={{ _: '100%', tablet: '70%' }} p={'0 20px'}>
        <Link href={`/portfolio`}>
          <Btn variant="orangeDark" m={'40px 0'} width={'100%'}>
            {' '}
            Portfolio
          </Btn>
        </Link>
      </Box>
    </Box>
  )
}

export default MoreInfoTextPart03

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
