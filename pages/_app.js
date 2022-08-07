import { useState, useEffect } from 'react';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import Box from '../styles/Box';

import Navigation from '../components/navigation/Navigation';

import GoToTopOfPage from '../components/GoToTopOfPage';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Box maxWidth={1440}
             minWidth={375}
             minHeight={'100vh'}
             width={'100%'}
             m={'0 auto'}
             bg={'colorWhite'}
             boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
             overflow={'hidden'}
             display={'flex'}
             flexDirection={'column'}
             justifyContent={'space-between'}

        >
          <Navigation />
          <Component {...pageProps} />
          <GoToTopOfPage/>
        </Box>
      </ThemeProvider>
  );
}

export default MyApp;
