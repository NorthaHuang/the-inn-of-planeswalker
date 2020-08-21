import React from 'react';

interface IComponentProps {
  card: any;
}

const Normal = ({ card }: IComponentProps): JSX.Element => (
  <img src={card.image_uris?.normal} alt={card.name} />
);

export default Normal;
