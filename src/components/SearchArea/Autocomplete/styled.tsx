import styled from 'styled-components';

const StyledWrapper = styled.ul`
  width: 100%;
  max-height: 9rem;
  overflow: auto;
  border: 1px solid #000;
  border-top-width: 0;
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;

  button {
    width: 100%;
    text-align: left;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export default StyledWrapper;
