import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';

// Redux
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/user/actions';

// Core
import { ROUTES } from '../../core/constants/routes';

// Components

// Styles
import './LoginPage.scss';
import { useEffect } from 'react';

export const LoginPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [cookie, setCookie] = useCookies(['user']);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Name is required!'),
    password: yup.string().required('Password is required!'),
  });

  useEffect(() => {
    if (cookie.user) {
      history.push(ROUTES.HOME);
    }
  }, [])

  const onSubmit = async (username: string, password: string) => {
    const user = await dispatch(login({username, password})).unwrap();

    if (user) {
      setCookie('user', user);
      history.push(ROUTES.HOME);
      toast.success('Success!');
    }
  };

  return (
    <div className="login-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.username, values.password);
          resetForm();
        }}
      >
        {({ errors, values, handleChange }) => (
          <Form className="form">
            <TextField
              label="Name"
              name="username"
              helperText={errors.username}
              onChange={handleChange}
              value={values.username}
              className="form__field"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              helperText={errors.password}
              onChange={handleChange}
              value={values.password}
              className="form__field"
            />
            <Button
              type="submit"
              variant="outlined"
              className="form__submit"
            >
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
