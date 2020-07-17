import React, { useState, useContext, useLayoutEffect } from 'react';
import StyledWrapper from './styled';
import context from '../../store';
import PaginationButton from './PaginationButton';

interface ComponentProps {
  cardsData: any;
}

interface CardsNumber {
  PER_PAGE: number;
  total: number;
}

interface PageButtonMeta {
  id: string;
  children: string;
  paginationType: string;
  targetPage: number;
}

const Pagination = ({ cardsData }: ComponentProps): JSX.Element => {
  /* TODO: 更新好多次... */
  // console.log(cardsData);

  /* Pagination Button Metadata (for render pagination button) */
  const [paginationButtonMeta, setPaginationButtonMeta] = useState<PageButtonMeta[]>([]);

  /* Context */
  const { pagination } = useContext(context);

  /* States */
  const [cardsNumber, setCardsNumber] = useState<CardsNumber>(() => ({
    PER_PAGE: 175, // 每頁卡片數量
    total: 0, // 總卡片數
  }));
  const [totalPageNumber, setTotalPageNumber] = useState<number>(() => 1);

  /* Update cardsNumber.total  */
  useLayoutEffect(
    () =>
      setCardsNumber({
        ...cardsNumber,
        total: cardsData.total_cards,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cardsData]
  );

  /* Update totalPageNumber */
  useLayoutEffect(
    () => setTotalPageNumber(Math.ceil(cardsNumber.total / cardsNumber.PER_PAGE)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cardsNumber.total]
  );

  /* 當前頁面更新後，更新按鈕目標頁數 */
  useLayoutEffect(
    () =>
      setPaginationButtonMeta([
        {
          id: 'toFirst',
          children: '<<',
          paginationType: 'prev',
          targetPage: 1,
        },
        {
          id: 'toPrev',
          children: 'Prev',
          paginationType: 'prev',
          targetPage: pagination.nowPage - 1,
        },
        {
          id: 'toNext',
          children: 'Next',
          paginationType: 'next',
          targetPage: pagination.nowPage + 1,
        },
        {
          id: 'toLast',
          children: '>>',
          paginationType: 'next',
          targetPage: totalPageNumber,
        },
      ]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pagination.nowPage]
  );

  return (
    <StyledWrapper>
      {paginationButtonMeta.length > 0 &&
        /**
         * TODO: 總頁數 > 1 才顯示按鈕，其他地方等樣式設定後再來考慮
         */
        totalPageNumber > 1 &&
        paginationButtonMeta.map(({ id, children, paginationType, targetPage }) => (
          <PaginationButton
            key={id}
            paginationType={paginationType}
            targetPage={targetPage}
            totalPageNumber={totalPageNumber}
          >
            {children}
          </PaginationButton>
        ))}

      <p>
        Now Page: {pagination.nowPage} / {totalPageNumber}
      </p>
      <p>
        Total Cards: {(pagination.nowPage - 1) * cardsNumber.PER_PAGE + 1} -{' '}
        {cardsNumber.PER_PAGE * pagination.nowPage < cardsData.total_cards
          ? cardsNumber.PER_PAGE * pagination.nowPage
          : cardsData.total_cards}{' '}
        / {cardsData.total_cards}
      </p>
    </StyledWrapper>
  );
};

export default Pagination;
