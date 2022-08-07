import styled, { css } from 'styled-components'

import Box from '../../../styles/Box'
import Btn from '../../../styles/Btn'
import Link from '../../../styles/Link'
import TitleAndText from '../../../styles/TitleAndText'

const ContactTextPartHeader = () => {
  return (
    <Box
      // border={'pink 2px solid'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'left'}
      p={{ _: '00px 20px', mobileL: '0px 40px' }}
    >
      <TitleAndText
        variant={'title3Uppercase'}
        textAlign={{ _: 'center', tablet: 'left' }}
        color={'colorSecondary'}
        mb={20}
      >
        {' '}
        <TitleAndText as="span" color={'colorPrimary'}>
          Maecenas{' '}
        </TitleAndText>{' '}
        massa{' '}
      </TitleAndText>
      <Box
        // border={'orange 2px solid'}
        display={'flex'}
        justifyContent={'left'}
        alignItems={'center'}
        mb={20}
      >
        <Box
          // border={'red 2px solid'}
          width={{ _: '25px', tablet: '30px' }}
          height={{ _: '25px', tablet: '30px' }}
          mr={10}
        >
          <StyledImg src={`painter.png`} alt={'icon'} />
        </Box>
        <TitleAndText variant={'textSmallBold'} textAlign={'left'}>
          <TitleAndText as="span" color={'colorSecondary'}>
            Aliquam luctus, ante at congue elementum,{' '}
          </TitleAndText>
          nibh at sagittis imperdiet, justo mauris bibendum ipsum, et ultrices
          arcu augue eu risus
        </TitleAndText>
      </Box>
      <Box
        // border={'orange 2px solid'}
        display={'flex'}
        justifyContent={'left'}
        alignItems={'center'}
        mb={20}
      >
        <Box
          // border={'red 2px solid'}
          width={{ _: '25px', tablet: '30px' }}
          height={{ _: '25px', tablet: '30px' }}
          mr={10}
        >
          <StyledImg src={`painter.png`} alt={'icon'} />
        </Box>
        <TitleAndText variant={'textSmallBold'} textAlign={'left'}>
          <TitleAndText as="span" color={'colorSecondary'}>
            Duis bibendum sem massa,{' '}
          </TitleAndText>
          Ligula felis, urna convallis aliquam pellentesque, facilisis faucibus
          augue eget, luctus venenatis turpis.
        </TitleAndText>
      </Box>
      <Box
        // border={'orange 2px solid'}
        display={'flex'}
        justifyContent={'left'}
        alignItems={'center'}
        mb={20}
      >
        <Box
          // border={'red 2px solid'}
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
            Proin justo ante{' '}
          </TitleAndText>
          ornare posuere bibendum in tempus enim suscipit sodales sagittis.
        </TitleAndText>
      </Box>
      <Box
        // border={'yellow 2px solid'}
        width={{ _: '100%', tablet: '70%' }}
        p={'0 20px'}
      >
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

export default ContactTextPartHeader

const StyledImg = styled.img`
  width: 25px;
  height: 25px;
  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
