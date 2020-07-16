import styled from 'styled-components';

const BUTTON_WH = '1.25rem';

const ButtonStyled = styled.button`
  width: ${BUTTON_WH};
  height: ${BUTTON_WH};
  margin: auto;
  margin-right: 4px;
  transform: translate(0, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 2px;
    margin: auto;
    border-radius: 100px;
    display: block;
    background-color: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default ButtonStyled;
