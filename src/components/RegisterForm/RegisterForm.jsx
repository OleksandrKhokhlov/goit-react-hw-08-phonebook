import { Field, Form, Formik } from 'formik';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  EntryField,
  ErrorMsg,
} from 'components/ContactForm/ContactForm.styled ';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }, actions) => {
    console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <EntryField htmlFor="name">
          User Name
          <Field id="name" type="text" name="name" />
        </EntryField>
        <ErrorMsg name="name" component="span" />

        <EntryField htmlFor="email">
          Email
          <Field id="email" type="tel" name="email" />
        </EntryField>
        <ErrorMsg name="email" component="span" />

        <EntryField htmlFor="password">
          Password
          <Field id="password" type="tel" name="password" />
        </EntryField>
        <ErrorMsg name="password" component="span" />

        <Button variant="contained" type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
};
