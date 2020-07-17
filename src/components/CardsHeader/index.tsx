import React from 'react';
import StyledWrapper from './styled';

import Pagination from '../Pagination';

interface ComponentProps {
  cardsData: any;
}

const CardsHeader = ({ cardsData }: ComponentProps): JSX.Element => (
  <StyledWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <Pagination cardsData={cardsData} />
        </div>
      </div>
    </div>
  </StyledWrapper>
);

export default CardsHeader;
