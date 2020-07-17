import React, { useState, useContext, useLayoutEffect } from 'react';
import StyledWrapper from './styled';
import context from '../../../store';
import { apiCardsSearch } from '../../../api';

import CardsList from '../../CardsList';

const Cards = (): JSX.Element => {
  /* Context */
  const { searchText } = useContext(context);

  /* States */
  const [list, setList] = useState<any[]>([]);

  /* Gets Cards List */
  useLayoutEffect(() => {
    apiCardsSearch({
      q: searchText,
      include_extras: true,
    })
      .then(response => setList(response.data.data))
      .catch(error => {
        console.log(error);
      });
  }, [searchText]);

  return (
    <StyledWrapper>
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>List Header</h2>
            </div>
          </div>
        </div>
      </header>

      {list && <CardsList list={list} />}
    </StyledWrapper>
  );
};

export default Cards;
