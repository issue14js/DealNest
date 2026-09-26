import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const initialForm = {
    name: "",
    email: "",
    password: "",
    role: "",
  };
  
  const {register} = useAuth()
  const roleOptions = ["admin", "manager", "salesAgent", "supportAgent"];
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccessMessage("");
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required.";
    }

    if (!form.role) {
      nextErrors.role = "Role is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    await register(form)
    navigate('/dashboard')


  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 shadow-perssed shadow-2xl p-5 rounded-2xl " noValidate>
      <div className="mb-3 text-center">
        <h1 className="text-2xl font-semibold text-primary">Register</h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Create a new account and get started.
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="register-name"
          className="block text-sm font-medium text-on-surface"
        >
          Name
        </label>
        <input
          id="register-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          aria-invalid={Boolean(errors.name)}
          className={`w-full rounded-xl border bg-surface-container-low px-3 py-2.5 text-base text-on-surface placeholder:text-on-surface-variant outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.name
              ? "border-error bg-error-container"
              : "border-outline-variant"
          }`}
        />
        {errors.name && (
          <p className="rounded-md bg-error-container px-2 py-1 text-sm text-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="register-email"
          className="block text-sm font-medium text-on-surface"
        >
          Email
        </label>
        <input
          id="register-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          className={`w-full rounded-xl border bg-surface-container-low px-3 py-2.5 text-base text-on-surface placeholder:text-on-surface-variant outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.email
              ? "border-error bg-error-container"
              : "border-outline-variant"
          }`}
        />
        {errors.email && (
          <p className="rounded-md bg-error-container px-2 py-1 text-sm text-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="register-password"
          className="block text-sm font-medium text-on-surface"
        >
          Password
        </label>
        <input
          id="register-password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          aria-invalid={Boolean(errors.password)}
          className={`w-full rounded-xl border bg-surface-container-low px-3 py-2.5 text-base text-on-surface placeholder:text-on-surface-variant outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.password
              ? "border-error bg-error-container"
              : "border-outline-variant"
          }`}
        />
        {errors.password && (
          <p className="rounded-md bg-error-container px-2 py-1 text-sm text-error">
            {errors.password}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="register-role"
          className="block text-sm font-medium text-on-surface"
        >
          Role
        </label>
        <select
          id="register-role"
          name="role"
          value={form.role}
          onChange={handleChange}
          aria-invalid={Boolean(errors.role)}
          className={`w-full rounded-xl border bg-surface-container-low px-3 py-2.5 text-base text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.role
              ? "border-error bg-error-container"
              : "border-outline-variant"
          }`}
        >
          <option value="">Select a role</option>
          {roleOptions.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        {errors.role && (
          <p className="rounded-md bg-error-container px-2 py-1 text-sm text-error">
            {errors.role}
          </p>
        )}
      </div>

      {successMessage && (
        <p className="rounded-md bg-primary/10 px-3 py-2 text-sm text-primary">
          {successMessage}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-xl mb-0  bg-primary px-4 py-2.5 text-base font-semibold text-on-primary transition duration-200 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        Register
      </button>
      <span className="text-[12px] w-full mt-1 justify-center flex gap-1">You have an acount <a className="text-primary " href="/login">Login</a> </span>
    </form>
  );
};

export default Register;
