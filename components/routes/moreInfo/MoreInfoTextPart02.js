import styled from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const MoreInfoTextPart02 = () => {
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
          Slide02 Lorem{' '}
        </TitleAndText>{' '}
        dolor
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
            {' '}
            Donec luctus tortor{' '}
          </TitleAndText>
          consectetur adipiscing elit. Suspendisse massa.
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
            Mauris vel{' '}
          </TitleAndText>
          nulla vitae odio.
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
            Nunc ac mattis tempor massa eu enim consectetur, ac tincidunt erat
            maximus{' '}
          </TitleAndText>
          libero, non rhoncus erat. Sed
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

export default MoreInfoTextPart02

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
