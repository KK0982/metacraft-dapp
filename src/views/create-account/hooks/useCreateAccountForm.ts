import { useMemo } from 'react'
import { useFormik } from 'formik'
import { useCheckName } from '../../../hooks/registry/useCheckName'
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
      food: yup.string().max(30)
    })
  }, [checkName])

  const formik = useFormik({
    initialValues: { name: '', food: '' },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (data) => {
    },
  })

  return formik
}
