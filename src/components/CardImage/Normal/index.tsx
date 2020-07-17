import React from 'react';

interface ComponentProps {
  card: any;
}

const Normal = ({ card }: ComponentProps): JSX.Element => {
  return <img src={card.image_uris?.normal} alt={card.name} />;
};

export default Normal;
