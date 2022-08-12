import styled from 'styled-components'

import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import offerSizesItems from './offerSizesItems'

const OfferSingleSize = () => {
  return (
    <Box
           width={'100%'}
      display={'flex'}
      flexDirection={{ _: 'column', tablet: 'row' }}
      flexWrap={'wrap'}
      justifyContent={{ _: 'center', tablet: 'space-between' }}
      alignItems={{ _: 'center', tablet: 'stretch' }}
      mt={40}
    >
      {offerSizesItems.map((item) => (
        <Box
          key={`${item.title}.${item.size}`}
                    width={{ _: '100%', tablet: '45%', tabletL: '24%' }}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          mb={40}
        >
          <Box
                     mb={20}
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <ImgStyled src={`${item.pathPhoto}`} alt={'photo'} />
          </Box>
          <Box>
            <TitleAndText
              variant={{ _: 'textMiddle', tablet: 'textLarge' }}
              textAlign={'center'}
              mb={20}
            >
              {item.title}
            </TitleAndText>
          </Box>
          <Box
                      display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mb={20}
          >
            <Box
              width={24}
              height={24}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              mr={10}
            >
              <img
                src={`offer/dimensions.png`}
                alt={'dimensions'}
                width={'100%'}
              />
            </Box>
            <TitleAndText
              variant={{ _: 'textSmall', tablet: 'textMiddle' }}
              textAlign={'center'}
            >
              {item.size}
            </TitleAndText>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default OfferSingleSize

const ImgStyled = styled.img`
  width: 100%;
  @media (min-width: 568px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`
