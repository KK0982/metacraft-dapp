import { useMemo, useState } from 'react'
import { useFormik } from 'formik'
import { useCheckName } from '../../../hooks/registry/useChekcName'
import * as yup from 'yup'

export function useCreateAccountForm() {
  const { run: checkNameFn } = useCheckName()

  const checkName = useMemo(() => {
    return async (value: string, context: yup.TestContext) => {
      if (!value) return true;

      const result = await checkNameFn(value);

      if (result?.status!==200) {
        return context.createError({ message: 'check name failed' });
      }

      if (result?.data?.['name_can_use'] === false) {
        return context.createError({ message: 'This nickname has already been used' });
      }
      return true;
    }
  }, [checkNameFn]);

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup
        .string()
        .required('name is required')
        .max(10)
        .test('check-used', '', checkName),
    })
  }, [checkName])

  const formik = useFormik({
    initialValues: {
      name: '',
      food: '',
      skin: '',
    },
    validationSchema: validationSchema,
    onSubmit: (data) => {
      console.log(data)
    },
  })

  return formik
}
