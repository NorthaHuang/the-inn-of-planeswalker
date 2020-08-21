import React, { useState } from 'react';
import StyledWrapper from './styled';
import { IColors, IRarities, ITypes } from './interface';

/* Filter Components */
import Colors from './Colors';
import Rarity from './Rarities';
import Types from './Types';

const CardsFilter = (): JSX.Element => {
  /* States */
  // Colors
  const [colors, setColors] = useState<IColors[]>(() => [
    {
      color: '{W}',
      selected: false,
    },
    {
      color: '{U}',
      selected: false,
    },
    {
      color: '{B}',
      selected: false,
    },
    {
      color: '{R}',
      selected: false,
    },
    {
      color: '{G}',
      selected: false,
    },
    {
      color: '{C}',
      selected: false,
    },
  ]);
  // Rarity
  const [rarities, setRarities] = useState<IRarities[]>(() => [
    {
      name: 'Common',
      checked: false,
    },
    {
      name: 'Uncommon',
      checked: false,
    },
    {
      name: 'Rare',
      checked: false,
    },
    {
      name: 'Mythic Rare',
      checked: false,
    },
  ]);
  // Types
  const [types, setTypes] = useState<ITypes[]>([
    {
      name: '生物',
      value: 'carture',
    },
    {
      name: '鵬洛客',
      value: 'planeswalker',
    },
    {
      name: '瞬間',
      value: 'instant',
    },
    {
      name: '巫術',
      value: 'sorcery',
    },
    {
      name: '結界',
      value: 'enchantment',
    },
    {
      name: '神器',
      value: 'artifact',
    },
    {
      name: '指揮官',
      value: 'commanders',
    },
    {
      name: '地',
      value: 'land',
    },
  ]);

  return (
    <StyledWrapper>
      <div className="container content">
        <header className="row">
          <div className="col">
            <h3>This is Lightbox.</h3>
          </div>
        </header>
        <div className="row">
          <div className="col">
            {/* Color: 顏色 */}
            <Colors colors={colors} setColors={setColors} />
            {/* Rarity: 稀有度 */}
            <Rarity rarity={rarities} setRarities={setRarities} />
            {/* Type: 類別 */}
            <Types types={types} setTypes={setTypes} />
          </div>
          <div className="col">
            {/* CMC: 法力費用 */}
            {/* Set: 系列 */}
          </div>
        </div>

        {/* Form Button */}
        <div className="row">
          <div className="col">
            <button>Reset</button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CardsFilter;
