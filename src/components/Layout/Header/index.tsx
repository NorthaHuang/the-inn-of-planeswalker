import React from 'react';
import StyledWrapper from './styled';

import Logo from './Logo';
import SearchArea from '../../SearchArea';
import Navigation from './Navigation';

const Header = (): JSX.Element => (
  <StyledWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="content">
            <div>
              {/* TODO: 最後處理分隔線 */}
              <Logo /> &nbsp;|&nbsp; <SearchArea />
            </div>

            <Navigation />
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

export default Header;
