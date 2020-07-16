import React, { useRef, useLayoutEffect } from 'react';
import InputStyled from './styled';

interface ComponentProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ inputText, setInputText }: ComponentProps): JSX.Element => {
  /* Input's Ref */
  const inputRef = useRef<HTMLInputElement | null>(null);

  /* 初次進入網頁時，聚焦在 input 上 */
  useLayoutEffect(() => {
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InputStyled
      value={inputText}
      onChange={evt => setInputText(evt.target.value)}
      type="text"
      placeholder="Cards name..."
      ref={inputRef}
    />
  );
};

export default Input;
