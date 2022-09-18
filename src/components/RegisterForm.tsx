import { useFormik } from 'formik';
import { createUser } from '../services/auth';

interface Validate {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validate = (values: Validate) => {
  const errors: Partial<Validate> = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be at least 8 characters long ';
  } else if (values.password !== values.confirmPassword) {
    errors.password = 'the password and confirm password fields must match.';
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword =
      'the password and confirm password fields must match.';
  }
  return errors;
};
export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      profileImage:
        'https://scontent-ord5-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ord5-1.cdninstagram.com&_nc_cat=1&_nc_ohc=inc9B6dKJjkAX_ATDGm&edm=ANct6CgBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT_UayQmrwBNNj5u9BVmUa2KD9pGcYLVYj6ppkeLbl01JQ&oe=632DBF4F&_nc_sid=e4e9cf',
    },
    validate,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        return console.log('password dont match');
      }
      alert(JSON.stringify(values, null, 2));
      return createUser({
        email: values.email,
        password: values.password,
        userName: values.username,
        profileImage: values.profileImage,
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">
        Username:
        <input
          id="username"
          name="username"
          type="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </label>
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
      ) : null}

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

      <label htmlFor="confirmPassword">
        Confirm Password:
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
      </label>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}
