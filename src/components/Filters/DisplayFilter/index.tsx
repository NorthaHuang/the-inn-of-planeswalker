import React, { useRef, useContext } from 'react';
import StyledWrapper from './styled';
import context from '../../../store';
import Select from '../../tags/Select';

/* API 格式 Enum */
import { UNIQUE, ORDER, DIR } from '../../../api/format';

interface ISelectData {
  keyName: string;
  valueType: string;
}

interface IOptionsData {
  [propertynName: string]: {
    value: string | number;
    text: string;
  }[];
}

const DisplayFilter = (): JSX.Element => {
  /* Reference */
  /* Options Data 常數定義 */
  const optionsData = useRef<IOptionsData>({
    uniqueMode: [
      {
        value: UNIQUE.CARDS,
        text: '顯示一張',
      },
      {
        value: UNIQUE.ART,
        text: '獨特插畫',
      },
      {
        value: UNIQUE.PRINTS,
        text: '所有版本',
      },
    ],
    order: [
      {
        value: ORDER.NAME,
        text: '名稱',
      },
      {
        value: ORDER.SET,
        text: '系列/序號',
      },
      {
        value: ORDER.RELEASED,
        text: '發布日期',
      },
      {
        value: ORDER.RARITY,
        text: '稀有度',
      },
      {
        value: ORDER.COLOR,
        text: '顏色',
      },
      {
        value: ORDER.USD,
        text: '市價: 美金',
      },
      {
        value: ORDER.TIX,
        text: '市價: TIX',
      },
      {
        value: ORDER.EUR,
        text: '市價: 歐元',
      },
      {
        value: ORDER.CMC,
        text: '法力費用',
      },
      {
        value: ORDER.POWER,
        text: '力量',
      },
      {
        value: ORDER.TOUGHNESS,
        text: '防禦',
      },
      {
        value: ORDER.EDHREC,
        text: 'EDHREC 排名',
      },
      {
        value: ORDER.ARTIST,
        text: '藝術家姓名',
      },
    ],
    orderDirection: [
      {
        value: DIR.Auto,
        text: '自動',
      },
      {
        value: DIR.ASC,
        text: '正序',
      },
      {
        value: DIR.DESC,
        text: '反序',
      },
    ],
  }).current;

  /* Select 組件的參數資料；for 遞迴用 */
  const selectData = useRef<ISelectData[]>([
    {
      keyName: 'uniqueMode',
      valueType: 'string',
    },
    {
      keyName: 'order',
      valueType: 'string',
    },
    {
      keyName: 'orderDirection',
      valueType: 'string',
    },
  ]).current;

  /* Context */
  const { displayFilterValue, setDisplayFilterValue, setPagination } = useContext(
    context
  );

  return (
    <StyledWrapper>
      {selectData.map(
        ({ keyName, valueType }: ISelectData): JSX.Element => (
          <Select
            key={keyName}
            optionsData={optionsData[keyName]}
            defaultValue={displayFilterValue[keyName]}
            onChange={value => {
              setPagination(state => ({
                ...state,
                isLocked: true,
              }));
              setDisplayFilterValue(states => ({
                ...states,
                [keyName]: valueType === 'string' ? value.toString() : +value,
              }));
            }}
          />
        )
      )}
    </StyledWrapper>
  );
};

export default DisplayFilter;
