import Box from '../../../../styles/Box'

import BoxSingleQuestion from './BoxSingleQuestion'
import DoYouWantToChat from './DoYouWantToChat'

import faqItems from './faqItems'

const Faq = () => {
  const faqItem = faqItems.map((item, index) => (
    <BoxSingleQuestion
      key={item.question}
      question={item.question}
      smallDescription={item.smallDescription}
      opened={index === 0}
    />
  ))

  return (
    <Box
      m={'0 auto'}
      width={'100%'}
      maxWidth={1140}
      p={{ _: '20px 20px 40px 20px', tablet: '40px 20px 40px 20px' }}
      textAlign={'center'}
      display={'flex'}
      flexDirection={{ _: 'column', tablet: 'row' }}
      alignItems={{ _: 'center', tablet: 'stretch' }}
      justifyContent={{ _: 'center', tablet: 'space-between' }}
    >
      <DoYouWantToChat />

      <Box
        width={{ _: '100%', tabletL: '60%' }}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={{ _: 'center', tablet: 'flex-start' }}
        alignItems={{ _: 'center', tablet: 'flex-start' }}
        flexWrap={'wrap'}
      >
        {faqItem}
      </Box>
    </Box>
  )
}

export default Faq
