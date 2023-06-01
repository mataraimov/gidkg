import * as React from 'react';
import axios from 'axios';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../modules/components/Typography';
import AppForm from '../modules/views/AppForm';
import { email, required } from '../modules/form/validation';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import FormFeedback from '../modules/form/FormFeedback';
import withRoot from '../modules/withRoot';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [sent, setSent] = React.useState(false);
  const [token, setToken] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isEmpty(token)) {
      localStorage.setItem('userToken', token);
      navigate('/user-profile');
    }
  }, [token, navigate]);

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = (values) => {
    const userData = {
      email_or_phone_number: values.email, // changed from 'email' to 'email_or_phone_number'
      password: values.password,
    };
    axios
      .post('http://127.0.0.1:8000/api/users/login/', userData)
      .then((response) => {
        const data = response.data;
        if (!isEmpty(data) && data.access) {
          // changed from 'token' to 'access'
          setSent(true);
          setToken(data.access); // changed from 'token' to 'access'
        } else {
          console.log('Server-side error: ', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Войти
          </Typography>
          <Typography variant="body2" align="center">
            {'Еще не зарегистрированы? '}
            <Link href="/sign-up/" align="center" underline="always">
              Регистрация
            </Link>
          </Typography>
        </React.Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'В процессе…' : 'Войти'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/forgot-password/">
            Забыли пароль?
          </Link>
        </Typography>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);
