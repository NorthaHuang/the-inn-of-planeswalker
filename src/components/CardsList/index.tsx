import React from 'react';
import StyledWrapper from './styled';
import { NavLink } from 'react-router-dom';
import CardImage from '../CardImage';

interface IComponentProps {
  list: any[];
}

/**
 *
 * 如果僅一筆資料，則直接導向該卡詳細內容頁
 */

const CardsList = ({ list }: IComponentProps): JSX.Element => (
  <StyledWrapper>
    <div className="container">
      <ul className="row">
        {list.map(card => (
          <li key={card.id} className="col-sm-6 col-md-4 col-lg-3">
            <NavLink to={`/card/${card.set}/${card.collector_number}`}>
              <p>● {card.name}</p>

              <CardImage card={card} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </StyledWrapper>
);

export default CardsList;
