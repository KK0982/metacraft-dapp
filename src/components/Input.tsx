import React, { FC, useCallback, useMemo } from 'react'
import styled from 'styled-components'

interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'pattern'
  > {
  value?: string
  onUserInput?: (value: string) => void
  pattern?: string
  className?: string
}

export const Input: FC<InputProps> = React.memo(
  ({ className, value, onUserInput, pattern, ...rest }) => {
    const reg = useMemo(() => new RegExp(pattern), [pattern])

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value

        if (!value || reg.test(value)) {
          onUserInput && onUserInput(value || '')
        }
      },
      [onUserInput, pattern]
    )

    return (
      <div className={`flex items-stretch h-48 min-w-[400px] bg-f7f8fc rounded-15 px-20 ${className}`}>
        <NoStyleInput value={value} {...rest} onChange={onChange} className='text-16 leading-24 text-1b2533'/>
      </div>
    )
  }
)

const NoStyleInput = styled.input`
  border: none;
  box-shadow: none;
  appearance: none;
  outline: none;
  background: transparent;
  flex: 1;

  &::focus {
    border: none;
    box-shadow: none;
    appearance: none;
    outline: none;
    color: inherit;
  }
`
