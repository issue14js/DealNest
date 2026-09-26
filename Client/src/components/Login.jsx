import { useState } from 'react'

const initialForm = {
  email: '',
  password: '',
}

const Login = () => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setSuccessMessage('')
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.password.trim()) {
      nextErrors.password = 'Password is required.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validateForm()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage('')
      return
    }

    setSuccessMessage('Login successful. Welcome back!')
    console.log('Login submitted', form)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-3  shadow-perssed shadow-2xl p-5 rounded-2xl ' noValidate>
      <div className='mb-3 text-center'>
        <h1 className='text-2xl font-semibold text-primary'>Login</h1>
        <p className='mt-2 text-sm text-on-surface-variant'>Welcome back! Please enter your details.</p>
      </div>

      <div className='space-y-2'>
        <label htmlFor='login-email' className='block text-sm font-medium text-on-surface'>Email</label>
        <input
          id='login-email'
          name='email'
          type='email'
          value={form.email}
          onChange={handleChange}
          placeholder='you@example.com'
          aria-invalid={Boolean(errors.email)}
          className={`w-full rounded-xl border bg-surface-container-low px-3 py-3 text-base text-on-surface placeholder:text-on-surface-variant outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.email ? 'border-error bg-error-container' : 'border-outline-variant'
          }`}
        />
        {errors.email && <p className='rounded-md bg-error-container px-2 py-1 text-sm text-error'>{errors.email}</p>}
      </div>

      <div className='space-y-2'>
        <label htmlFor='login-password' className='block text-sm font-medium text-on-surface'>Password</label>
        <input
          id='login-password'
          name='password'
          type='password'
          value={form.password}
          onChange={handleChange}
          placeholder='Enter your password'
          aria-invalid={Boolean(errors.password)}
          className={`w-full rounded-xl border bg-surface-container-low px-3 py-3 text-base text-on-surface placeholder:text-on-surface-variant outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.password ? 'border-error bg-error-container' : 'border-outline-variant'
          }`}
        />
        {errors.password && <p className='rounded-md bg-error-container px-2 py-1 text-sm text-error'>{errors.password}</p>}
      </div>

      {successMessage && (
        <p className='rounded-md bg-primary/10 px-3 py-2 text-sm text-primary'>{successMessage}</p>
      )}

      <button
        type='submit'
        className='w-full rounded-xl bg-primary px-4 py-3 text-base font-semibold text-on-primary transition duration-200 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30'
      >
        Login
      </button>
      <span className="text-[12px] w-full mt-1 justify-center flex gap-1">You have not any acount <a className="text-primary " href="/register">Register</a> </span>
    </form>
  )
}

export default Login