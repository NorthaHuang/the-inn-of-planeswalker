import React from 'react';
import StyledWrapper from './styled';
import { IRarities } from '../interface';

interface IComponentProps {
  rarity: IRarities[];
  setRarities: React.Dispatch<React.SetStateAction<IRarities[]>>;
}

const Rarities = ({ rarity }: IComponentProps): JSX.Element => {
  return (
    <StyledWrapper>
      {rarity.map(({ name, checked }) => (
        <label key={name} htmlFor={name}>
          <span>{name}</span>
          <input id={name} checked={checked} type="checkbox" />
        </label>
      ))}
    </StyledWrapper>
  );
};

export default Rarities;
