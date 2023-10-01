import { Field, Form, Formik } from 'formik';
import {  Button} from '@mui/material';
import {
  EntryField,
  ErrorMsg,
} from 'components/ContactForm/ContactForm.styled ';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ email, password }, actions) => {
    dispatch(logIn({ email, password }));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmitForm}
    >
      <Form>
        <EntryField htmlFor="email">
          Email
          <Field id="email" type="email" name="email" />
        </EntryField>
        <ErrorMsg name="email" component="span" />

        <EntryField htmlFor="password">
          Password
          <Field id="password" type="password" name="password" />
        </EntryField>
        <ErrorMsg name="password" component="span" />

        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Form>
    </Formik>
  );
};
