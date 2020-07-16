import React from 'react';
import ButtonStyled from './styled';

interface ComponentProps {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const ResetButton = ({ setInputText }: ComponentProps): JSX.Element => (
  <ButtonStyled type="reset" onClick={() => setInputText('')} />
);

export default ResetButton;
