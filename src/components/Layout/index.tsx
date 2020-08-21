import React, { useContext, useLayoutEffect } from 'react';
import StyledWrapper from './styled';
import { BrowserRouter as Router } from 'react-router-dom';
import context from '../../store';

/* Layout Blocks */
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Lightbox from '../Lightbox';

const Layout = (): JSX.Element => {
  const { lightbox, setLightbox } = useContext(context);

  /* 檢查內容是否有東西 */
  useLayoutEffect(() => {
    if (lightbox.isShow && lightbox.content === null) {
      setLightbox({
        ...lightbox,
        isShow: false,
      });
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  return (
    <StyledWrapper>
      <Router>
        <Header />
        <Main />
      </Router>

      <Footer />

      {lightbox.isShow && lightbox.content !== null && (
        <Lightbox content={lightbox.content} />
      )}
    </StyledWrapper>
  );
};

export default Layout;
