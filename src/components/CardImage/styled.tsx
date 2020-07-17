import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 0;
  border-radius: 4.75% / 3.5%; /* alpha 版本為: 7% / 5.5%; */
  padding-bottom: 139.627%;
  background-size: cover;
  background-position: center center;
  position: relative;

  img,
  .doubleFaces {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }

  .doubleFaces {
    transform: rotateY(0deg);
    transform-style: preserve-3d;

    > img {
      backface-visibility: hidden;

      &:last-of-type {
        transform: rotateY(180deg);
      }
    }
  }

  .split,
  .doubleFaces {
    transition: 400ms ease;
    z-index: 1;
  }

  .split {
    + button {
      margin: auto;
      top: 0;
      bottom: 0;
      left: auto;
      right: 3%;
    }
  }

  button {
    width: 17%;
    height: 0;
    padding-bottom: 17%;
    opacity: 0.6;
    transition: 200ms;
    transform: translate(0, 0);
    border-radius: 100%;
    background-color: #fff;
    z-index: 2;
    position: absolute;
    top: 26%;
    left: 75%;

    img {
      width: 68%;
      height: 68%;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default StyledWrapper;
