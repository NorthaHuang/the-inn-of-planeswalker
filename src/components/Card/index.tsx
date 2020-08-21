import React, { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledWrapper from './styled';
import { apiCard } from '../../api';

import CardImage from '../CardImage';
import Symbols from '../Symbols';

const Card = (): JSX.Element => {
  // 卡片 State 存放
  const [card, setCard] = useState<any>({});

  // 取得 URL 參數
  const { code, number } = useParams();

  // 取得卡牌資料 (僅初始化時取得)
  useLayoutEffect(() => {
    apiCard(
      {
        // urlParams
        code,
        number,
      },
      {
        lang: 'zht',
        // format: 'json',
        // face: 'back',
        // version: 'large',
        // pretty: false,
      }
    ).then(response => {
      setCard(response.data);
      console.log(response.data);
      // .split(/({\d+})|({\w})/g)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledWrapper>
      <div className="container">
        {card.printed_name && (
          <>
            <div className="row">
              {/* 卡牌圖片 */}
              <div className="col-md-4">
                <CardImage card={card} />
              </div>

              {/* 卡牌純文字資訊 */}
              <div className="col-md-4">
                <article className="card">
                  <div className="printed-names-wrapper">
                    <p className="printed-name">{card.printed_name}</p>
                    {card.cmc !== 0 && (
                      <p className="mana-cose">
                        {card.mana_cost.split('}{').map((str: string, idx: number) => {
                          const manaCode = str.replace(/[{}]/g, '');

                          return (
                            <span key={idx}>
                              <Symbols symbol={`{${manaCode}}`} />
                            </span>
                          );
                        })}
                      </p>
                    )}
                  </div>
                  <div className="type-line">
                    <p>{card.printed_type_line}</p>
                    <p>
                      <abbr title={card.set_name}>{card.set.toUpperCase()}</abbr>
                    </p>
                  </div>
                  <div className="printed-text">
                    <div>
                      {card.printed_text.split('\n').map((text: string) =>
                        text.split('\n').map((text: string) => (
                          <p key={text}>
                            {text
                              .split(/({\d+})|({\w})/g)
                              .filter(str => str !== undefined && str !== '')
                              .map(str => {
                                if (str.match(/({\d+})|({\w})/g)) {
                                  return (
                                    <span>
                                      <Symbols symbol={str} />
                                    </span>
                                  );
                                }
                                return str;
                              })}
                          </p>
                        ))
                      )}
                    </div>
                    <i>{card.flavor_text}</i>
                  </div>
                  <div>
                    {card.loyalty ? (
                      <p>忠誠度: {card.loyalty}</p>
                    ) : card.power ? (
                      <p>
                        力量/堅韌: {card.power}/{card.toughness}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <p>繪師: {card.artist}</p>
                  </div>
                  <div className="legalities">
                    {Object.keys(card.legalities).map(keyName => {
                      if (
                        keyName === 'duel' ||
                        keyName === 'future' ||
                        keyName === 'oldschool'
                      ) {
                        return null;
                      }

                      return (
                        <p key={keyName}>
                          <span>{keyName.toUpperCase()}: </span>
                          <span>{card.legalities[keyName]}</span>
                        </p>
                      );
                    })}
                  </div>
                </article>
              </div>

              {/* 卡牌的其他版本選擇 */}
              {/* <div className="col">
                <p>卡牌的其他版本選擇</p>
              </div> */}
            </div>
          </>
        )}
      </div>
    </StyledWrapper>
  );
};

export default Card;
