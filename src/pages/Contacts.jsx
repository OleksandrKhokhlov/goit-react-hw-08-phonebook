import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm ';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from '../components/Contacts/ContactList ';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from 'components/Container.styled';

export default function ContactsPage() {
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {errorMessage ? toast.error(errorMessage) : <Contacts />}
    </Container>
  );
};
