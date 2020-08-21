import React, { useRef, useLayoutEffect, useContext } from 'react';
import InputStyled from './styled';
import context from '../../../store';

interface IComponentProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ inputText, setInputText }: IComponentProps): JSX.Element => {
  /* Context */
  const { setIsInputFocus } = useContext(context);

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
      onFocus={() => setIsInputFocus(true)}
      onBlur={() => setIsInputFocus(false)}
      type="text"
      placeholder="Cards name..."
      ref={inputRef}
    />
  );
};

export default Input;
