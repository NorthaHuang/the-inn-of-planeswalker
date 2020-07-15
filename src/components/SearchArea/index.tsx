import React, { useState, useContext, FormEvent } from 'react';
import FormStyled from './styled';
import context from '../../store';

import Input from './Input';
import ResetButton from './ResetButton';

const SearchInput = (): JSX.Element => {
  /* Context */
  const { setSearchText } = useContext(context);

  /* Local States */
  const [inputText, setInputText] = useState<string>('');

  /* 將搜索字串送交到 Store */
  const submit = (evt: FormEvent) => {
    evt.preventDefault();
    setSearchText(inputText);
  };

  return (
    <FormStyled onSubmit={submit}>
      <Input inputText={inputText} setInputText={setInputText} />
      <ResetButton setInputText={setInputText} />
      {/* TODO: Autocomplete */}
    </FormStyled>
  );
};

export default SearchInput;
