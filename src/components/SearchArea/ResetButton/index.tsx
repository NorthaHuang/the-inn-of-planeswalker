import React from 'react';
import ButtonStyled from './styled';

interface IComponentProps {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const ResetButton = ({ setInputText }: IComponentProps): JSX.Element => (
  <ButtonStyled type="reset" onClick={() => setInputText('')} />
);

export default ResetButton;
