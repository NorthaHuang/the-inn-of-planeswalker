import React, { useState } from 'react';
import transform from '../../../assets/images/icons/transform.svg';

interface ComponentProps {
  card: any;
}

const DoubleFaced = ({ card }: ComponentProps): JSX.Element => {
  const [isTransformed, setIsTransformed] = useState<boolean>(() => false);

  return (
    <>
      <div
        className="doubleFaces"
        style={{
          transform: `rotateY(${isTransformed ? 180 : 0}deg)`,
        }}
      >
        {card.card_faces?.map(
          (face: any): JSX.Element => (
            <img key={face.name} src={face.image_uris?.normal} alt={face.name} />
          )
        )}
      </div>

      <button
        type="button"
        onClick={evt => {
          evt.preventDefault();
          setIsTransformed(!isTransformed);
        }}
        title="Transform this card"
      >
        <img src={transform} alt="Tranform this card" />
      </button>
    </>
  );
};

export default DoubleFaced;
