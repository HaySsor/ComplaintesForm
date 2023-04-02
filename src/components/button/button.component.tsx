import styled from './button.module.scss';
import {ComponentProps} from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  ButtonText: string;
}

export const Button = ({ButtonText, ...props}: ButtonProps) => {
  return (
    <button {...props} className={styled.button}>
      {ButtonText}
    </button>
  );
};
