import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'
import Box from '../styles/Box'

import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'

import GoToTopOfPage from '../components/GoToTopOfPage'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box
          maxWidth={1440}
          minWidth={375}
          minHeight={'100vh'}
          width={'100%'}
          m={'0 auto'}
          bg={'colorWhite'}
          overflow={'hidden'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Navigation />
          <Component {...pageProps} />
          <Footer />
          <GoToTopOfPage />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default MyApp
