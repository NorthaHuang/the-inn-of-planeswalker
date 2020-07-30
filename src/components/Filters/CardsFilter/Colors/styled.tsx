import styled from 'styled-components';

const StyledWrapper = styled.div`
  button {
    width: 15%;
    padding: 3%;
    border-radius: 100%;
    overflow: hidden;
    transition: 200ms;
    line-height: 0;
    /* border-radius: 100%; */
    /* 無色法力的底色 background-color: #c9c4be; */

    &:hover {
      opacity: 1 !important;
    }
  }
`;

export default StyledWrapper;
