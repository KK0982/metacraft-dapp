import { useEffect, useMemo, useRef } from 'react'
import { useFormik } from 'formik'
import { useCheckName } from '../../../hooks/registry/useCheckName'
import * as yup from 'yup'
import { debounce } from 'lodash'

export function useCreateAccountForm() {
  const { run: checkNameFn } = useCheckName()
  const checkName = useMemo(() => {
    return async (value: string) => {
      if (!value) return true 

      const result = await checkNameFn(value)

      if (result?.data?.['name_can_use'] === false) {
        return false;
      }

      return true
    }
  }, [checkNameFn])

  const validationSchema = useMemo(() => {
    return yup.object().shape({
      name: yup
        .string()
        .required('name is required')
        .max(56)
        .test('check-used', 'This nickname has already been used', checkName),
      food: yup.string().max(30),
    })
  }, [checkName])

  const formik = useFormik({
    initialValues: { name: '', food: '' },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (data) => {},
  })

  const debouncedValidate = useMemo(
    () => debounce(formik.validateForm, 500),
    [formik.validateForm],
  );

  useEffect(
    () => {
      debouncedValidate(formik.values);
    },
    [formik.values, debouncedValidate],
  );

  return formik
}
