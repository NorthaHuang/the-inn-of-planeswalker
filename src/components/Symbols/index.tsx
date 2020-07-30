import React, { useContext } from 'react';
import StyledWrapper from './styled';
import context from '../../store';

interface IComponentProps {
  symbol: string;
}

const Symbols = ({ symbol }: IComponentProps): JSX.Element => {
  const { symbolsData } = useContext(context);

  const icon = symbolsData.find(symbolData => symbolData.symbol === symbol);

  return (
    <StyledWrapper
      title={icon?.english}
      style={{
        backgroundImage: `url(${icon?.svg_uri})`,
      }}
    >
      {icon?.symbol}
    </StyledWrapper>
  );
};

export default Symbols;
