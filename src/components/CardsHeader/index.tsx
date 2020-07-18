import React from 'react';
import StyledWrapper from './styled';

import Pagination from '../Pagination';
import Filters from '../Filters';

interface ComponentProps {
  cardsData: any;
}

const CardsHeader = ({ cardsData }: ComponentProps): JSX.Element => (
  <StyledWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="content">
            <Filters />

            <Pagination cardsData={cardsData} />
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

export default CardsHeader;
