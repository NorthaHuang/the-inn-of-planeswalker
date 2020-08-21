import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 1rem;

  .card {
    padding: 10px;
    border: 1px solid #000;
    border-top-width: 3px;
    border-bottom-width: 3px;
    border-radius: 4px;
  }

  .printed-names-wrapper {
    display: flex;
    align-items: center;
  }

  .printed-name {
    font-weight: bold;
  }

  .mana-cose {
    margin-left: 1rem;
    display: flex;
    align-items: center;

    > * {
      width: 1rem;
      line-height: 0;

      &:not(:last-of-type) {
        margin-right: 4px;
      }
    }
  }

  .printed-text {
    i {
      font-family: '標楷體', serif;
      font-weight: bold;
    }

    span {
      width: 1rem;
      margin: 0 2px;
      vertical-align: middle;
      display: inline-block;
    }
  }

  .type-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .legalities {
    padding: 0.25rem 1rem;
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    > p {
      width: 50%;
      margin: 0.25rem 0;
      font-size: 12px;

      span:last-of-type {
        font-weight: bold;
      }
    }
  }
`;

export default StyledWrapper;
