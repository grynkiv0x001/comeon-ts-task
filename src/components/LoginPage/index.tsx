import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import './LoginPage.scss';

export const LoginPage = () => {
  const initialValues = {
    name: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required!'),
    password: yup.string().required('Password is required!'),
  });

  const onSubmit = (name: string, password: string) => {
    console.log('Values: ', name, password);
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          onSubmit(values.name, values.password);
        }}
      >
        {({ errors, values, handleChange }) => (
          <Form>
            <TextField
              label="Name"
              name="name"
              helperText={errors.name}
              onChange={handleChange}
              value={values.name}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              helperText={errors.password}
              onChange={handleChange}
              value={values.password}
            />
            <Button type="submit" variant="outlined">Sign in</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
