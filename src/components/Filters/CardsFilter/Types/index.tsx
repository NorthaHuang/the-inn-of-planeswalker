import React from 'react';
import StyledWrapper from './styled';
import { ITypes } from '../interface';

interface IComponentProps {
  types: ITypes[];
  setTypes: React.Dispatch<React.SetStateAction<ITypes[]>>;
}

const Types = ({ types, setTypes }: IComponentProps): JSX.Element => {
  return (
    <StyledWrapper>
      <p>Type</p>
    </StyledWrapper>
  );
};

export default Types;
