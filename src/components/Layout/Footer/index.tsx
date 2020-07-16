import React from 'react';
import StyledWrapper from './styled';

const Footer = (): JSX.Element => (
  <StyledWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="content">
            <p>Powered by Scryfall, Created by Raven North.</p>
            <p>
              <a href="//magic.wizards.com" target="_blank" rel="noopener noreferrer">
                Magic: The Gathering
              </a>{' '}
              |{' '}
              <a href="//scryfall.com/" target="_blank" rel="noopener noreferrer">
                Scryfall
              </a>{' '}
              | {/* TODO: Repo 連結尚未出來 */}
              <a
                href="//github.com/NorthaHuang"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

export default Footer;
