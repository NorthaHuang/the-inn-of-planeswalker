import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import StyledWrapper from './styled';
import context from '../../../store';
import { apiCardsSearch, CardsSearchParams } from '../../../api';

import CardsHeader from '../../CardsHeader';
import Pagination from '../../Pagination';
import CardsList from '../../CardsList';

const Cards = (): JSX.Element => {
  /* Context */
  const { searchText, pagination, setPagination } = useContext(context);

  /* States */
  const [cardsData, setCardsData] = useState<any>(() => {});

  /* Get Card List */
  const getCardList = (params: CardsSearchParams) => {
    apiCardsSearch(params)
      .then(response => setCardsData(response.data))
      .catch(error => console.log(error));
  };

  /* Get new search data and back to page 1 */
  useEffect(() => {
    setPagination({
      ...pagination,
      nowPage: 1,
    });

    getCardList({
      q: searchText,
      page: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);
  /* Get other page's card list */
  useEffect(() => {
    getCardList({
      q: searchText,
      page: pagination.nowPage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.nowPage]);

  /* 卡牌清單更新後解鎖 */
  useLayoutEffect(() => {
    setPagination({
      ...pagination,
      isLocked: false,
    });
    console.log('Unlocked!');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsData]);

  return (
    <StyledWrapper>
      {cardsData && Object.keys(cardsData).length > 0 && (
        <>
          <CardsHeader cardsData={cardsData} />

          {!pagination.isLocked && (
            <>
              <CardsList list={cardsData.data} />

              <div className="container">
                <div className="row">
                  <div className="col">
                    <Pagination cardsData={cardsData} />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </StyledWrapper>
  );
};

export default Cards;
