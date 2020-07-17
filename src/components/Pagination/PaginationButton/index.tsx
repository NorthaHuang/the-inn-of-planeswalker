import React, { useState, useContext, useLayoutEffect } from 'react';
import StyledWrapper from './styled';
import context from '../../../store';

interface ComponentProps {
  children: string;
  paginationType: string;
  targetPage: number;
  totalPageNumber: number;
}

const PaginationButton = ({
  children,
  paginationType,
  targetPage,
  totalPageNumber,
}: ComponentProps): JSX.Element => {
  /* Context */
  const { pagination, setPagination } = useContext(context);

  /* States */
  const [styleCondition, setStyleCondition] = useState<boolean>(false);

  /* 頁數範圍驗證 */
  const pageNumberCheck = (targetPage: number): boolean => {
    if (
      // 小於第一頁
      targetPage < 1 ||
      // 大於最後一頁
      targetPage > totalPageNumber ||
      // 與現在同頁
      targetPage === pagination.nowPage
    ) {
      console.log('Pagination change ERROR!');
      return false;
    }

    return true;
  };

  /* 頁數更換 */
  const changePage = (targetPage: number): void => {
    // 如果驗證沒通過則退出
    if (!pageNumberCheck(targetPage) || pagination.isLocked) {
      return;
    }

    // 正式更換頁面, 並鎖住換頁按鈕
    console.log('locked!!!!!!!');
    setPagination({
      nowPage: targetPage,
      isLocked: true,
    });
  };

  /* Update condition of style */
  useLayoutEffect(() => {
    if (paginationType === 'prev') {
      setStyleCondition(pagination.isLocked || pagination.nowPage === 1);
    } else if (paginationType === 'next') {
      setStyleCondition(pagination.isLocked || pagination.nowPage === totalPageNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  return (
    <StyledWrapper
      type="button"
      onClick={() => changePage(targetPage)}
      style={{
        cursor: styleCondition ? 'not-allowed' : 'pointer',
        opacity: styleCondition ? 0.5 : 1,
      }}
    >
      {children}
    </StyledWrapper>
  );
};

export default PaginationButton;
