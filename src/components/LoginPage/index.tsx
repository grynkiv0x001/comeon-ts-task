import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useCookies } from 'react-cookie';

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
  const [cookie, setCookie] = useCookies(['user']);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Name is required!'),
    password: yup.string().required('Password is required!'),
  });

  const onSubmit = async (username: string, password: string) => {
    const user = await dispatch(login({username, password})).unwrap();

    if (user) {
      setCookie('user', user);
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
