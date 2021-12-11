import React, { FC, useCallback, useState } from 'react';

type TagColors = 'blue' | 'yellow' | 'green';

interface TagProps extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'onChange'> {
  className?: string;
  color: TagColors
  active?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

const colors = {
  'blue': 'text-2539f4 bg-f3efff',
  'blue-active': 'text-fff bg-2539f4',
  'yellow': 'text-ffc75d bg-fff9ec',
  'yellow-active': 'bg-ffc75d text-fff',
  'green': 'text-26c165 bg-e8fff1',
  'green-active': 'bg-e8fff1 text-fff',
}

export const Tag: FC<TagProps> = React.memo(({ className, children, color, active = false, onClick, value , onChange }) => {
  const baseClassName = 'text-16 leading-24 py-8 px-40 rounded-15 transition-all';
  const handleClick = useCallback((e) => {
    onChange && onChange(value);
    onClick && onClick(e);
  }, [onChange, onClick, value])

  return (
    <div onClick={handleClick} className={`${baseClassName} ${colors[!active ? color : color + '-active'] ?? ''} ${className ?? ''}`}>{children}</div>
  );
});

export const TagGroup: FC = React.memo(({ children }) => {
  return (
    <div className='flex flex-wrap items-center gap-x-24 gap-y-12'>
      {children}
    </div>
  );
})

export function useTags () {
  const [active, setActive] = useState<string>(undefined);

  const onChange = useCallback((value: string) => {
    setActive(value);
  }, [setActive])

  return [active, onChange] as const;
}