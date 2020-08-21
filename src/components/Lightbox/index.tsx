import React, { useContext } from 'react';
import StyledWrapper from './styled';
import context from '../../store';

interface IComponentProps {
  content: JSX.Element;
}

const Lightbox = ({ content }: IComponentProps): JSX.Element => {
  const { setLightbox } = useContext(context);

  return (
    <StyledWrapper
      onClick={() =>
        setLightbox(state => ({
          ...state,
          isShow: false,
        }))
      }
    >
      <div className="content-wrapper" onClick={evt => evt.stopPropagation()}>
        {content}
      </div>
      <button type="button" className="close-button" />
    </StyledWrapper>
  );
};

export default Lightbox;
