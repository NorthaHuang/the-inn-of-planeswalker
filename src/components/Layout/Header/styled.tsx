import styled from 'styled-components';

const StyledWrapper = styled.header`
  /* TODO: Fixed 固定在最上方 */
  padding: 1rem 0;
  border-bottom: 1px solid #000;
  z-index: 1;
  position: relative;

  p,
  ul {
    margin: 0;
  }

  .content {
    justify-content: space-between;

    &,
    > div {
      display: flex;
      align-items: center;
    }
  }

  /* Navigation */
  nav {
    ul {
      display: flex;
      align-items: center;

      li {
        margin-left: 1rem;
      }
    }
  }
`;

export default StyledWrapper;
