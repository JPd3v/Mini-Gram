import { useFormik } from 'formik';
import { useAuth } from '../context/AuthContext';
import { logInWithEmail, logOut } from '../services/auth';

interface Validate {
  email: string;
  password: string;
}
function validate(values: Validate) {
  const errors: Partial<Validate> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be at least 8 characters long ';
  }
  return errors;
}

export default function LogInForm() {
  const authHello = useAuth();
  console.log(authHello);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(authHello);
      alert(JSON.stringify(values, null, 2));
      logInWithEmail(values.email, values.password);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">
        Email Address:
        <input
          id="email"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </label>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">
        Password:
        <input
          id="password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </label>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
      <button
        type="button"
        onClick={() => {
          logOut();
        }}
      >
        logout
      </button>
    </form>
  );
}
