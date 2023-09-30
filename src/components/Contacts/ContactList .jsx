import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import {
  ButtonDelete,
  ContactsItem,
  ContactsList,
} from './ContactList .styled';
import { selectError, selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import toast from 'react-hot-toast';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const errorMessage = useSelector(selectError);

  return (
    <>
      <Filter />
      {errorMessage ? (
        toast.error(errorMessage)
      ) : (
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
      )}
    </>
  );
};
