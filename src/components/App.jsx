import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm ';
import { Contacts } from './Contacts/ContactList ';
import { Container } from './Container.styled';
import { Loader } from './Loader/Loader';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Contacts />
      <Loader />
      <Toaster />
    </Container>
  );
};
