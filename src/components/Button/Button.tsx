import React from 'react';
import noop from 'lodash/noop';
import './button.css';

export interface ButtonProps {
  /**
   * The content of the button. Can be a string or a JSX element.
   */
  children: React.ReactNode;

  disabled?: boolean;

  href?: string;

  icon?: string;

  intent?: 'primary' | 'secondary' | 'negative' | 'link';

  loading?: boolean;

  /**
   * How large should the button be?
   */
  size?: 'extra-small' | 'small' | 'medium' | 'large';

  /**
   * Should the button fill its parent's width
   */
  stretched?: boolean;

  target?: string;

  title?: string;

  type?: 'button' | 'reset' | 'submit';

  /**
   * Blur handler
   */
  onBlur?: (
    event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;

  /**
   * Click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;

  /**
   * Focus handler
   */
  onFocus?: (
    event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
}

export const Button = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    disabled,
    href,
    icon,
    intent,
    loading,
    size,
    stretched,
    target,
    title,
    type,
    onBlur,
    onClick,
    onFocus,
  } = props;

  const Tag = href ? 'a' : 'button';
  const hasIcon = !!icon && !loading;

  return (
    <Tag
      disabled={disabled || loading}
      href={href}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      target={target}
      title={title}
      type={type}
    >
      {children}
    </Tag>
  );
};

Button.defaultProps = {
  intent: 'primary',
  size: 'medium',
  type: 'button',
  onBlur: noop,
  onClick: noop,
  onFocus: noop,
};
