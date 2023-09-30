import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { AddButton,  EntryField,  ErrorMsg } from './ContactForm.styled ';
import { useDispatch, useSelector} from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const nameRegExp =
  /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      nameRegExp,
      ` Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    ),
  phone: Yup.string()
    .required('Required')
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerSubmit = (values, actions) => {
    const handlerAddContact = () => dispatch(addContact(values));

    const overlap = contacts
      .map(({ name }) => name)
      .includes(values.name);

    overlap
      ? alert(`${values.name} is already in contacts`)
      : handlerAddContact();

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
      onSubmit={handlerSubmit}
    >
      <Form>
        <h1>Phonebook</h1>
        <EntryField htmlFor="name">
          Name
          <Field id="name" type="text" name="name" />
        </EntryField>
        <ErrorMsg name="name" component="span" />
        <EntryField htmlFor="phone">
          Number
          <Field id="phone" type="tel" name="phone" />
        </EntryField>
        <ErrorMsg name="phone" component="span" />
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
};
