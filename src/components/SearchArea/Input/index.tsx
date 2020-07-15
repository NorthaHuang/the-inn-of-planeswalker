import React from 'react';
import InputStyled from './styled';

interface ComponentProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ inputText, setInputText }: ComponentProps): JSX.Element => (
  <InputStyled
    value={inputText}
    onChange={evt => setInputText(evt.target.value)}
    type="text"
    placeholder="Cards name..."
  />
);

export default Input;
