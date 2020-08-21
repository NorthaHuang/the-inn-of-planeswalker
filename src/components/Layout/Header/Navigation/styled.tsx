import styled from 'styled-components';

const ACTIVE_STYLE = `
	color: red;
	font-weight: bold;
`;

const StyledWrapper = styled.nav`
  a {
    /* TODO: 尚未套用到 RWD 判別 (Media Query) */
    &:hover {
      ${ACTIVE_STYLE}
    }
  }

  .active {
    ${ACTIVE_STYLE}
  }
`;

export default StyledWrapper;
