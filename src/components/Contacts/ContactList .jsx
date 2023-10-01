import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonDelete,
  ContactsItem,
  ContactsList,
} from './ContactList .styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {contacts?.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          {name}: {number}
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
