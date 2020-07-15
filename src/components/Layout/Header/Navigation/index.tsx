import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../../../../routes';
import StyledWrapper from './styled';

const Navigation = (): JSX.Element => {
  const { pathname: currentPath } = useLocation();
  const checkActive = (navLinkPath: string) => navLinkPath === currentPath;

  return (
    <StyledWrapper>
      <ul>
        {routes.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              activeClassName="active"
              isActive={() => checkActive(path)}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default Navigation;
