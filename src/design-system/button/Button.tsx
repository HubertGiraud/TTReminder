import * as React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  /** Button label */
  label: string;

  /**
   * Button disable state
   * @default false
   */
  disabled: boolean;
  /**
   * Executed function when button is clicked
   * If button is disabled the function is not executed
   */
  onClick: () => void;
}
export function Button(props: ButtonProps) {
  const { disabled = false } = props;
  const btnClass = classNames({
    btn: true,
    'btn-disabled': disabled,
  })
  return (
    <button
      className={btnClass}
      onClick={() => !disabled && props.onClick()}
    >
      {props.label}
    </button>
  )
}