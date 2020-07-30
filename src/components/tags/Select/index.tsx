import React from 'react';
import StyledWrapper from './styled';

/**
 * 不使用布林值的原因是:
 * 如果需要使用布林值的話就用 radio / checkbox 就好了
 */
interface IOptionsData {
  value: string | number;
  text?: string;
}

interface IComponentProps {
  defaultValue?: string | number;
  optionsData: IOptionsData[];
  onChange: (value: string | number) => void;
}

const Select = ({
  optionsData,
  defaultValue,
  onChange,
}: IComponentProps): JSX.Element => {
  return (
    <StyledWrapper
      value={defaultValue?.toString() || optionsData[0].value}
      onChange={evt => onChange(evt.target.value)}
    >
      {optionsData.map(({ value, text }) => (
        <option key={value.toString()} value={value.toString()}>
          {text || value}
        </option>
      ))}
    </StyledWrapper>
  );
};

export default Select;
