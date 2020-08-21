import React from 'react';
import StyledWrapper from './styled';

const About = (): JSX.Element => (
  <StyledWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>About</h1>
          <p>router 測試</p>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

export default About;
