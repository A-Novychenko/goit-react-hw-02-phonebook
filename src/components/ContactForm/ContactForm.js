import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';

const INITIAL_STATE = {
  name: '',
  number: '+38',
};

const Schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string()
    .phone('UK', 'Please enter a valid phone number in the format for UKRAINE')
    .required('A phone number is required'),
});

export const ContactForm = ({ contacts, onChange }) => {
  const handleForm = (values, { resetForm }) => {
    const id = nanoid();
    const { name, number } = values;
    const isInConntacts = contacts.find(contact => contact.name === name);

    if (isInConntacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    onChange({ id, name, number });
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_STATE}
      validationSchema={Schema}
      onSubmit={handleForm}
    >
      <Form>
        <label>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component={'div'} />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number" component={'div'} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
