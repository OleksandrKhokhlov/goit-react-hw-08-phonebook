import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const nameRegExp =
  /^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/;

const schema = Yup.object({
  name: Yup.string()
    .matches(
      nameRegExp,
      ` Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required('Required'),
  phone: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const handleAddContact = () => dispatch(addContact(values));

    const overlap = contacts.map(({ name }) => name).includes(values.name);

    overlap
      ? alert(`${values.name} is already in contacts`)
      : handleAddContact();

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          mx: 'auto',
          mb: 4,
          width: '60%',
          maxWidth: 400,
          '& .MuiTextField-root': { mb: 2 },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
          },
          '& label.Mui-focused': { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& .input': { color: 'white' },
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputBase-input': { color: 'white' },
          label: { color: 'white' },
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="name"
          label="Name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="phone"
          label="Phone"
          type="tel"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Button fullWidth color="primary" variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </>
  );
};
