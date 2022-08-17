import styled from 'styled-components'

import Box from '../../../styles/Box'

const OneSlide = ({
  portfolioItems,

  styleTranslate,
  styleTransition,
  widthSingleSlide,
}) => {
  return (
    <BoxWrapp
      howManySlides={portfolioItems.length}
      styleTranslate={styleTranslate}
      styleTransition={styleTransition}
      widthSingleSlide={widthSingleSlide}
    >
      {portfolioItems.map((item, index) => (
        <Box
          key={item + item + index}
          width={350}
          m={'0 80px 0 80px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img width={350} src={item} alt={item} />
        </Box>
      ))}
    </BoxWrapp>
  )
}

export default OneSlide

const BoxWrapp = styled(Box)`
  display: flex;
  align-items: stretch;
  width: ${(props) => props.howManySlides * props.widthSingleSlide}px;
  transform: translateX(-${(props) => props.styleTranslate}px);
  transition: transform ease-out ${(props) => props.styleTransition}s;
`
