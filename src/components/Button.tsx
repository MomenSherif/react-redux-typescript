import React from 'react';
import styles from './Button.module.css';

type ExtraProps = {
  variant:
  | 'contained'
  | 'outlined'
  | 'text'
};

type Props = React.ComponentProps<'button'> & ExtraProps;

const Button: React.FC<Props> = (props) => {
  return <button {...props} className={`${styles[props.variant]} ${props.className}`}>{props.children}</button>;
};

export default Button;
