import styled from 'styled-components';

const StyledWrapper = styled.section`
  li {
    margin-bottom: 1rem;
    position: relative;

    a {
      display: block;
    }

    p {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      white-space: nowrap;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default StyledWrapper;
