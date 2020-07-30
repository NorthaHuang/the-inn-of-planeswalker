import React, { useRef, useEffect } from 'react';
import StyledWrapper from './styled';

import DisplayFilter from './DisplayFilter';

const Filters = (): JSX.Element => {
  /* TODO: 預設開啟 Lightbox，之後記得刪除 */
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    buttonRef.current?.click();
  }, []);

  return (
    <StyledWrapper>
      <DisplayFilter />
    </StyledWrapper>
  );
};

export default Filters;
