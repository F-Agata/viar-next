import Box from '../../../styles/Box'
import TitleAndText from '../../../styles/TitleAndText'

import OfferSingleSize from './OfferSingleSize'

const OfferSizes = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={{ _: '40px 20px 40px 20px', tablet: '40px0 40px 40px 40px' }}
      bg={'colorLightBg'}
      width={'100%'}
    >
      <TitleAndText
        variant={{ _: 'title3Uppercase', tablet: 'title2Uppercase' }}
        maxWidth={768}
        textAlign={'center'}
        mb={20}
      >
        Pellentesque sed lacus magnat
      </TitleAndText>
      <TitleAndText
        variant={{ _: 'textMiddle', tablet: 'textLarge' }}
        maxWidth={768}
        textAlign={'center'}
      >
        Pellentesque habitant morbi tristique senectus et netus et
      </TitleAndText>

      <OfferSingleSize />
    </Box>
  )
}

export default OfferSizes
