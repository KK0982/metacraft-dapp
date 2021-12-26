import { useRouter } from 'next/router'
import React, { useCallback, useMemo, useState } from 'react'
import Button from '../../components/Button'
import { Container } from '../../components/layout/Container'
import { Spacing } from '../../components/Spacing'
import { useAuth } from '../../hooks/auth/useAuth'
import { useRegistry } from '../../hooks/registry/useRegistry'
import { FoodField } from './components/FoodField'
import { NameField } from './components/NameField'
import { Skin, SkinField } from './components/SkinField'
import { useCreateAccountForm } from './hooks/useCreateAccountForm'
import Square from '/public/icons/square-three.svg'

const CreateAccount = React.memo(() => {
  const form = useCreateAccountForm()
  const [skin, setSkin] = useState<Skin>()
  const { run: registry, loading } = useRegistry()
  const router = useRouter()

  const auth = useAuth()

  const handleRegistry = useMemo(
    () => async () => {
      const errors = await form.validateForm()

      if (errors.name || errors.food || !auth) return

      const authResult = await auth(form.values.name)

      const result = await registry({
        address: authResult.checksumAddress,
        signature: authResult.signature,
        timestamp: Number(authResult.timestamp),
        username: form.values.name,
        fruit: form.values.food,
        skin: skin.name || 'default_1',
      })

      if (result.status === 200 && result.data.accessToken) {
        form.resetForm();
        router.replace(
          `/?token=${result.data.accessToken}&address=${authResult.checksumAddress}&name=${form.values.name}&signature${authResult.signature}&timestamp=${authResult.timestamp}&type=registry-success`
        )
      }
    },
    [auth, router, registry, form, skin]
  )

  return (
    <Container>
      <section className="mb-64">
        <p className="text-20 leading-28 mt-18 mb-20 text-center">
          This address is the first time to log in to metacraft.
        </p>
        <div className="shadow w-full bg-fff">
          <div className="w-full bg-1b2533 py-24 px-40 flex justify-between items-center text-fff text-24 leading-32">
            Become a member of Metacraft
            <Square />
          </div>
          <div className="px-32 py-24">
            <NameField
              id="name"
              name="name"
              value={form.values.name}
              error={form.errors.name}
              onChange={(name: string) => form.setFieldValue('name', name)}
            />
            <Spacing y={32} />
            <FoodField
              id="food"
              name="food"
              value={form.values.food}
              onChange={(name: string) => form.setFieldValue('food', name)}
            />
            <Spacing y={32} />
            <SkinField value={skin} onChange={setSkin} />
            <Spacing y={32} />
            <div className="flex justify-center w-full">
              <Button
                size="lg"
                color="blue"
                className="w-[300px]"
                onClick={handleRegistry}
                disabled={loading}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
})

export default CreateAccount
