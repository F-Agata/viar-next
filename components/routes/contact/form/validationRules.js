const validationRules = (values) => {
  const errors = {}

  if (!values.phone.trim()) {
    errors.phone = 'podaj numer telefonu'
  }

  if (!values.email.trim()) {
    errors.email = 'podaj email'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'email zawiera nieprawidłowe znaki i/lub nie zawiera @'
  }

  if (!values.message.trim()) {
    errors.message = 'wpisz treść'
  } else if (values.message.length < 6) {
    errors.message = 'treść jest zbyt krótka'
  }
  return errors
}

export default validationRules
