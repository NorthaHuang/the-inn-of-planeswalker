import React, { useState, useRef, useEffect, useContext } from 'react';
import StyledWrapper from './styled';
import context from '../../../store';
import { apiCardsAutocomplete } from '../../../api';

interface IComponentProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

// Search Timer Reference
interface IAutocompleteRef {
  searchTimer: number;
}

// 搜尋的相關常數
enum SEARCH {
  TEXT_MIN_LENGTH = 2, // 字數最少之限制
  TIMEOUT = 300, // 延後 Request 之時間(毫秒)
}

const Autocomplete = ({ inputText, setInputText }: IComponentProps): JSX.Element => {
  /* Context */
  const { isInputFocus } = useContext(context);

  /* Autocomplete Result List */
  const [list, setList] = useState<string[]>(() => []);

  /* 打字延遲搜尋用參數，避免 Request 過多 */
  const autocompleteRef = useRef<IAutocompleteRef>({
    searchTimer: 0,
  });

  /* inputText 更新即執行 */
  useEffect(() => {
    const refCurrent = autocompleteRef.current;
    // Clear Timeout
    clearTimeout(refCurrent.searchTimer);

    // Reset Timeout
    refCurrent.searchTimer = setTimeout(() => {
      if (inputText.length >= SEARCH.TEXT_MIN_LENGTH) {
        apiCardsAutocomplete({
          q: inputText,
          include_extras: true,
        })
          .then(response => setList(response.data.data))
          .catch(error => {
            console.log(error);
          });
      } else if (list.length > 0) {
        /* 如果 inputText.length < 2 + 清單項目不為空，則清空 List */
        setList([]);
      }
    }, SEARCH.TIMEOUT);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);

  /* Autocomplete 選取點擊後之設定 */
  const buttonHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const button = evt.target as HTMLButtonElement;
    const cardName = button.textContent as string;
    setInputText(cardName);
    setList([]); // 讓 autocomplete 可立刻消失
  };

  // const display = inputText === list[0] && list.length === 1 ? 'none' : 'block';

  return (
    <StyledWrapper style={{ display: isInputFocus ? 'block' : 'none' }}>
      {list.map(cardName => (
        <li key={cardName}>
          <button type="button" onClick={buttonHandler}>
            {cardName}
          </button>
        </li>
      ))}
    </StyledWrapper>
  );
};

export default Autocomplete;
