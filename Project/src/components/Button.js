import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.css';

const Button = ({ children, ...rest }) => (
	<button
		styleName="Button"
		{...rest}
	>
		{children}
	</button>
);

export default CSSModules(Button, styles);