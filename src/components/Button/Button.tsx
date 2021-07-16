import React from 'react';
import noop from 'lodash/noop';
import classnames from 'classnames';
import './button.css';

export type ButtonIntent = 'primary' | 'secondary' | 'negative';
export type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large';

export interface ButtonProps {
  /**
   * The content of the button. Can be a string or a JSX element.
   */
  children: React.ReactNode;

  disabled?: boolean;

  href?: string;

  intent: ButtonIntent;

  loading?: boolean;

  /**
   * How large should the button be?
   */
  size?: ButtonSize;

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

  const className = classnames(
    'Button',
    `Button--intent-${intent}`,
    `Button--size-${size}`,
    { 'Button--stretched': stretched },
  );

  return (
    <Tag
      className={className}
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
