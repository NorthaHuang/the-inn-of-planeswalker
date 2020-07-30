import React from 'react';
import StyledWrapper from './styled';
import { IColors } from '../interface';
import Symbols from '../../../Symbols';

interface IComponentProps {
  colors: IColors[];
  setColors: React.Dispatch<React.SetStateAction<IColors[]>>;
}

const Colors = ({ colors, setColors }: IComponentProps): JSX.Element => {
  return (
    <StyledWrapper>
      {colors.map(({ color, selected }, index) => (
        <button
          key={color}
          style={{
            opacity: selected ? 1 : 0.5,
          }}
        >
          <Symbols symbol={color} />
        </button>
      ))}
    </StyledWrapper>
  );
};

export default Colors;
