import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { ModalChangeContact } from 'Modal/modal';

export const Contacts = () => {
  const [open, setOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({
    id: '',
    name: '',
    number: '',
  });
  const handleOpen = (id, name, number) => {
    setCurrentContact({ id, name, number });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List dense={true} sx={{ m: 0, gap: 10, color: 'white' }}>
      {contacts?.map(({ id, name, number }) => (
        <ListItem
          key={id}
          secondaryAction={
            <>
              <Button
                type="button"
                variant="contained"
                size="small"
                sx={{
                  ml: 2,
                  color: 'inherit',
                  backgroundColor: '#125197',
                  '&:hover': {
                    backgroundColor: '#0f2e7f',
                  },
                }}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </Button>
              <Button
                type="button"
                variant="contained"
                size="small"
                sx={{
                  ml: 2,
                  color: 'inherit',
                  backgroundColor: '#125197',
                  '&:hover': {
                    backgroundColor: '#0f2e7f',
                  },
                }}
                onClick={() => handleOpen(id, name, number)}
              >
                Update
              </Button>
            </>
          }
        >
          <ListItemText primary={`${name}: ${number}`} />
        </ListItem>
      ))}

      <ModalChangeContact
        open={open}
        handleClose={handleClose}
        currentContact={currentContact}
      />
    </List>
  );
};
