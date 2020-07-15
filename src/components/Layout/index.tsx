import React from 'react';
import StyledWrapper from './styled';
import { BrowserRouter as Router } from 'react-router-dom';

/* Layout Blocks */
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = (): JSX.Element => {
  return (
    <StyledWrapper>
      <Router>
        <Header />
        <Main />
      </Router>

      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
