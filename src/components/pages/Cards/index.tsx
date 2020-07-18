import React, { useState, useContext, useRef, useEffect, useLayoutEffect } from 'react';
import StyledWrapper from './styled';
import context from '../../../store';
import { apiCardsSearch } from '../../../api';
import { CardsSearchParams } from '../../../api/format';

import CardsHeader from '../../CardsHeader';
import Pagination from '../../Pagination';
import CardsList from '../../CardsList';

const Cards = (): JSX.Element => {
  /* Context */
  const { searchText, pagination, setPagination, displayFilterValue } = useContext(
    context
  );

  /* States */
  const [cardsData, setCardsData] = useState<any>(() => {});

  /* Reference: 避免執行 "[pagination.nowPage]"  的 useEffect 首次被強制執行  */
  const isLoaded = useRef<boolean>(false);

  /* Get Card List */
  const getCardList = (params: CardsSearchParams) => {
    const defaultParams = {
      q: searchText,
      page: pagination.nowPage,
      unique: displayFilterValue.uniqueMode,
      order: displayFilterValue.order,
      dir: displayFilterValue.orderDirection,
    };
    const extendedParams = Object.assign(defaultParams, params);
    apiCardsSearch(extendedParams)
      .then(response => setCardsData(response.data))
      .catch(error => console.log(error));
  };

  /* Get new search data and back to page 1 */
  useEffect(() => {
    console.log('searchText 改變');

    if (pagination.nowPage !== 1) {
      console.log('searchText 改變，接著修改 pagination');
      setPagination({
        ...pagination,
        nowPage: 1,
      });
    } else {
      console.log('searchText 改變，接著 Fetch API');
      getCardList({
        q: searchText,
        page: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, displayFilterValue]);

  /* Get other page's card list */
  useEffect(() => {
    if (isLoaded.current) {
      console.log('pagination 改變，接著 Fetch API');

      getCardList({
        q: searchText,
        page: pagination.nowPage,
      });
    } else {
      isLoaded.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.nowPage]);

  /* 卡牌清單更新後解鎖 */
  useLayoutEffect(() => {
    if (pagination.isLocked) {
      setPagination({
        ...pagination,
        isLocked: false,
      });
      console.log('Unlocked!');
    }
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
