import { createGlobalStyle } from 'styled-components';
import _gridSystem from './_gridSystem';
import _normalize from './_normalize';

const StyledGlobal = createGlobalStyle`
	/*----- Initialize -----*/
	${_normalize}
	${_gridSystem}

	html {
		font-size: 16px;
		line-height: 1.5;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
	}

	a {
		text-decoration: none;
	}

	img {
		max-width: 100%;
	}

	ul,
	ol {
		padding: 0;
		list-style-type: none;
	}

	button {
		margin: 0;
		padding: 0;
		border: 0;
		background-color: transparent;
	}

	input,
	button {
		line-height: inherit;
		&:focus {
			outline: 0;
		}
	}

	input {
		border-width: 1px;
		border-radius: 0;
	}

	button,
	select {
		cursor: pointer;
		color: inherit;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
`;

export default StyledGlobal;
