import React, { FC, ReactElement, useCallback, useState } from 'react'

type TagColors = 'blue' | 'yellow' | 'green'

interface TagProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
  className?: string
  color: TagColors
  active?: boolean
  value?: string
  onChange?: (value: string) => void
}

const colors = {
  blue: 'text-2539f4 bg-f3efff',
  'blue-active': 'text-fff bg-2539f4',
  yellow: 'text-ffc75d bg-fff9ec',
  'yellow-active': 'bg-ffc75d text-fff',
  green: 'text-26c165 bg-e8fff1',
  'green-active': 'bg-26c165 text-fff',
}

export const Tag: FC<TagProps> = React.memo(
  ({
    className,
    children,
    color,
    active = false,
    onClick,
    value,
    onChange,
  }) => {
    const baseClassName =
      'text-16 leading-24 py-8 px-40 rounded-15 transition-all cursor-pointer'
    const handleClick = useCallback(
      (e) => {
        onChange && onChange(value)
        onClick && onClick(e)
      },
      [onChange, onClick, value]
    )

    return (
      <div
        onClick={handleClick}
        className={`${baseClassName} ${
          colors[!active ? color : color + '-active'] ?? ''
        } ${className ?? ''}`}
      >
        {children}
      </div>
    )
  }
)

interface TagGroupProps {
  value?: string
  onChange?: (value: string) => void;
  forceClassName?: string;
}

export const TagGroup: FC<TagGroupProps> = React.memo(
  ({ children, value, onChange ,forceClassName }) => {
    return (
      <div className={ forceClassName ? forceClassName : "flex flex-wrap items-center gap-x-24 gap-y-12"}>
        {
          React.Children.map(children, (child: ReactElement) => {
            if (!child) return null;

            return React.cloneElement(child, {
              onChange: onChange,
              active: child?.props?.value === value
            });
          })
        }
      </div>
    )
  }
)
