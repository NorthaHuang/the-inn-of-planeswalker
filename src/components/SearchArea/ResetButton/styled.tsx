import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  margin: auto;
  padding: 0;
  border: 0;
  transform: translate(0, 0);
  background-color: transparent;
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
