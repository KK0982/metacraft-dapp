import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { Field } from './Field'
import { SkinPerview } from '../../../components/SkinPerview'
import { useSkins } from '../../../hooks/registry/useSkins'
import { useActiveAccount } from '../../../connector'
import Image from 'next/image'

const ItemTitle = React.memo(({ children }) => {
  return (
    <p className="text-16 leading-24 text-1b2533 mb-12 text-center">
      {children}
    </p>
  )
})

const DEFAULT_SKINS = [
  {
    name: 'cocoa',
    skin: 'https://www.minecraftskins.com/uploads/skins/2021/12/18/c-o-c-o-a----remake-----19546219.png?v436',
  },
  {
    name: 'bloom',
    skin: 'https://www.minecraftskins.com/uploads/skins/2021/12/12/b-l-o-o-m---winx-club-19512177.png?v436',
  },
  {
    name: 'Summer Days',
    skin: 'https://www.minecraftskins.com/uploads/skins/2021/12/17/-summer-days--remake-19540903.png?v436',
  },
]

export interface Skin {
  name: string
  skin: string
}

interface SkinFieldProps {
  value: Skin
  onChange: (skin: Skin) => void
}

export const SkinField: FC<SkinFieldProps> = React.memo(
  ({ value, onChange }) => {
    const active = useActiveAccount()
    // TODO: mock
    const {} = useSkins('0x9620b36841DaCd567032110000a7F090eBf2BCa3')

    useEffect(() => {
      if (!value) {
        // set default skins
        onChange(DEFAULT_SKINS[0]);
      }
    }, [value, onChange]);

    return (
      <Field title="What do you want to look like?">
        <div className="flex gap-x-16 items-stretch">
          <div>
            <ItemTitle>Preview skin</ItemTitle>
            <SkinPerview
              name={value?.name}
              skin={value?.skin}
            />
          </div>
          <div className="flex-1">
            <ItemTitle>Your wardrobe</ItemTitle>
            <div className="bg-f7f8fc h-[322px] rounded-15">
              <div className="flex items-center border-b border-1b2533[0.07] py-16">
                <p className="w-[130px] text-14 leading-20 text-1a1b20 pl-24">
                  Default Skins:
                </p>
                <DefaultSkinSelector
                  className="flex-1"
                  value={value}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Field>
    )
  }
)

const DefaultSkinSelector: FC<{
  className: string
  value: Skin
  onChange: (value: Skin) => void
}> = React.memo(({ className, value, onChange }) => {
  const handleClick = useCallback(
    (i: number) => {
      const data = DEFAULT_SKINS[i]

      if (!data) return

      onChange(data)
    },
    [onChange]
  )

  return (
    <div className={`${className} flex gap-x-[16px]`}>
      {DEFAULT_SKINS.map((item, i) => {
        return (
          <Image
            onClick={() => handleClick(i)}
            key={item.name}
            src={`/views/auth/default-nft-${i + 1}.png`}
            width="56"
            height="56"
            className='cursor-pointer'
          />
        )
      })}
    </div>
  )
})
