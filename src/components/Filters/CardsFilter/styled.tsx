import styled from 'styled-components';

const StyledWrapper = styled.div`
  header {
    border-bottom: 1px solid #ccc;
  }

  .content {
    /* 有必要? */
    max-height: 90vh;
    overflow: auto;

    color: #ccc;
    background-color: #060a0a;
  }
`;

export default StyledWrapper;
