import React from 'react';
import StyledWrapper from './styled';
import cardBackImg from '../../assets/images/card_back.jpg';

/* Different Layout */
import Normal from './Normal';
import DoubleFaced from './DoubleFaced';
import Split from './Split';

interface ComponentProps {
  card: any;
}

enum CARD_LAYOUT {
  NORMAL = 'normal',
  DOUBLE_FACED = 'transform',
  SPLIT = 'split',
}

/**
 *
 * TODO:
 *   5. 鵬洛客卡處理
 *   6. 搜索是否有其他格式，沒有則收尾優化
 */

const CardImage = ({ card }: ComponentProps): JSX.Element => {
  /* TODO: MouseOver 時懸浮出大圖 */

  /* Layout 判斷 */
  let cardLayout;
  switch (card.layout) {
    case CARD_LAYOUT.NORMAL:
      cardLayout = <Normal card={card} />;
      break;
    case CARD_LAYOUT.DOUBLE_FACED:
      cardLayout = <DoubleFaced card={card} />;
      break;
    case CARD_LAYOUT.SPLIT:
      cardLayout = <Split card={card} />;
      break;
    default:
      cardLayout = <Normal card={card} />;
  }

  return (
    /** Alpha 版本邊角較圓潤，所以需要特別調整 */
    <StyledWrapper
      title={`${card.name} (${card.set})`}
      style={{
        backgroundImage:
          card.layout === CARD_LAYOUT.NORMAL ? `url(${cardBackImg})` : 'none',
        borderRadius: card.set === 'lea' ? '7% / 5.5%' : '4.75% / 3.5%',
      }}
    >
      {cardLayout}
    </StyledWrapper>
  );
};

export default CardImage;
