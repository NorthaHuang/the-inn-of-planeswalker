import React from 'react';
import StyledWrapper from './styled';

import DisplayFilter from './DisplayFilter';

const Filters = (): JSX.Element => {
  return (
    <StyledWrapper>
      <DisplayFilter />
      {/* TODO: CardsFilter */}
    </StyledWrapper>
  );
};

export default Filters;
