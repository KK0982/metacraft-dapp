import React, { FC, useCallback, useMemo } from 'react'
import styled from 'styled-components'

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'pattern'
  > {
  value?: string
  onUserInput?: (value: string) => void
  pattern?: string
  className?: string
}

export const Input: FC<InputProps> = React.memo(
  ({ className, value, onUserInput, pattern, onChange, ...rest }) => {
    const reg = useMemo(() => new RegExp(pattern), [pattern])

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        // if custom onChange function
        onChange && onChange(e);

        const value = e.currentTarget.value

        if (!value || reg.test(value)) {
          onUserInput && onUserInput(value || '')
        }
      },
      [onUserInput, pattern]
    )

    return (
      <div
        className={`flex items-stretch h-48 min-w-[400px] bg-f7f8fc rounded-15 px-20 ${className}`}
      >
        <input
          value={value}
          {...rest}
          onChange={handleChange}
          className="text-16 leading-24 text-1b2533 placeholder-opacity-30"
        />
      </div>
    )
  }
)
