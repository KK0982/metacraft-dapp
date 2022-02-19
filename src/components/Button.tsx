import React from 'react'
import clsx from 'clsx'

const SIZE = {
  default: 'h-32',
  lg: 'h-50',
}

const FILLED = {
  default:
    'bg-transparent opacity-80 hover:opacity-100 flex items-cetner justify-center',
  blue: 'bg-2539f4 text-16 leading-24 text-fff flex items-center justify-center',
}

const OUTLINED = {
  default: 'bg-transparent opacity-80 hover:opacity-100',
  blue: 'bg-transparent border border-2539f4',
}

const EMPTY = {
  default:
    'flex bg-transparent justify-center items-center disabled:opacity-50 disabled:cursor-auto bg-opacity-80 hover:bg-opacity-100',
}

const LINK = {
  default:
    'text-primary hover:text-high-emphesis focus:text-high-emphesis whitespace-nowrap focus:ring-0',
  blue: 'text-blue text-opacity-80 hover:text-opacity-100 focus:text-opacity-100 whitespace-nowrap focus:ring-0',
}

const VARIANT = {
  outlined: OUTLINED,
  filled: FILLED,
  empty: EMPTY,
  link: LINK,
}

export type ButtonColor = 'blue' | 'default'

export type ButtonSize = 'xs' | 'sm' | 'lg' | 'default' | 'none'

export type ButtonVariant = 'outlined' | 'filled' | 'empty' | 'link'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor
  size?: ButtonSize
  variant?: ButtonVariant
  ref?: React.Ref<HTMLButtonElement>
}

function Button({
  children,
  className = undefined,
  color = 'default',
  size = 'default',
  variant = 'filled',
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        VARIANT[variant][color],
        variant !== 'empty' && SIZE[size],
        'rounded-15 disabled:cursor-not-allowed focus:outline-none',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
