import { useMemo, useState } from "react";
import { useFormik } from 'formik';

export function useCreateAccountForm () {
  const formik = useFormik({
    initialValues: {
      name: '',
      food: '',
      skin: ''
    },
    onSubmit: (data) => {
      console.log(data);
    }
  });

  return formik;
}