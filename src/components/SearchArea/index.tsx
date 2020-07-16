import React, { useState, useContext } from 'react';
import FormStyled from './styled';
import context from '../../store';

/* Modules */
import Input from './Input';
import ResetButton from './ResetButton';
import Autocomplete from './Autocomplete';

const SearchInput = (): JSX.Element => {
  /* Context */
  const { setSearchText } = useContext(context);

  /* Local States */
  const [inputText, setInputText] = useState<string>('');

  /* 更新 Store 的搜索之字串 */
  const submit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (inputText.length < 1) {
      return;
    }

    setSearchText(inputText);
  };

  return (
    <FormStyled onSubmit={submit}>
      <Input inputText={inputText} setInputText={setInputText} />
      <ResetButton setInputText={setInputText} />

      <Autocomplete inputText={inputText} setInputText={setInputText} />
    </FormStyled>
  );
};

export default SearchInput;
