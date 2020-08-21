import React, { useState } from 'react';
import rotate from '../../../assets/images/icons/rotate.svg';

interface IComponentProps {
  card: any;
}

const Split = ({ card }: IComponentProps): JSX.Element => {
  const [isRotate, setIsRotate] = useState<boolean>(() => false);

  return (
    <>
      <img
        className="split"
        src={card.image_uris?.normal}
        alt={card.name}
        style={{
          transform: `rotate(${isRotate ? 90 : 0}deg) scale(${isRotate ? 0.71 : 1})`,
        }}
      />

      <button
        type="button"
        onClick={evt => {
          evt.preventDefault();
          setIsRotate(!isRotate);
        }}
        title="Rotate this card"
      >
        <img src={rotate} alt="Rotate this card" />
      </button>
    </>
  );
};

export default Split;
