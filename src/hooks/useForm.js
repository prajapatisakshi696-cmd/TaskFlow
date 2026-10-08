import { useState } from 'react'


export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const errors = validate(values)

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  const handleBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }))

  const touchAll = () =>
    setTouched(Object.keys(initialValues).reduce((acc, k) => ({ ...acc, [k]: true }), {}))

  const reset = () => {
    setValues(initialValues)
    setTouched({})
  }

  const isValid = Object.keys(errors).length === 0
  // Only show errors for fields the user has interacted with
  const visibleErrors = Object.fromEntries(Object.entries(errors).filter(([k]) => touched[k]))

  return { values, errors: visibleErrors, isValid, handleChange, handleBlur, touchAll, reset }
}
