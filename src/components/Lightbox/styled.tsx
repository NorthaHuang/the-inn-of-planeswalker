import styled from 'styled-components';

const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;

  /* 內容 Wrapper */
  .content-wrapper {
    width: 100%;
  }

  /* 關閉按鈕 */
  .close-button {
    width: 3rem;
    height: 3rem;
    transform: translate(0, 0);
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;

    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      margin: auto;
      border-radius: 100px;
      background-color: #fff;
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
  }
`;

export default StyledWrapper;
