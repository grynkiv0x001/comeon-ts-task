import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

// Redux
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/user/actions';

// Core
import { ROUTES } from '../../core/constants/routes';

// Components

// Styles
import './LoginPage.scss';

export const LoginPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Name is required!'),
    password: yup.string().required('Password is required!'),
  });

  const onSubmit = async (username: string, password: string) => {
    const isLogged = await dispatch(login({username, password})).unwrap();

    if (isLogged) {
      history.push(ROUTES.HOME);
    }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          onSubmit(values.username, values.password);
        }}
      >
        {({ errors, values, handleChange }) => (
          <Form>
            <TextField
              label="Name"
              name="username"
              helperText={errors.username}
              onChange={handleChange}
              value={values.username}
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
