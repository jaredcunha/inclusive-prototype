import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../useSessionStorage';
import { Button } from '@trussworks/react-uswds';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { RadioSet, TextInput } from '../components/form';

const Page1 = () => {
  const [firstName, setFirstName] = useSessionStorage('firstName', '');
  const [lastName, setLastName] = useSessionStorage('lastName', '');
  const [radioSelection, setRadioSelection] = useSessionStorage(
    'radioSelection',
    '',
  );

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Give a first name, idiot!'),
    lastName: Yup.string().required(
      'Ugggh. Last name!!!!! You forgot the last name.',
    ),
    radioSelection: Yup.string().required('Select an option'),
  });

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    radioSelection: radioSelection,
  };

  const errorChain = (errors, fieldError) => {
    if (errors[Object.keys(errors)[0]] === fieldError) {
      return fieldError;
    }
  };

  const onSubmit = () => {
    navigate('review');
  };

  return (
    <div className="padding-5">
      <h1>Test thing</h1>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
          }}
        >
          {({ errors }) => (
            <Form>
              <TextInput
                id="firstName"
                label="First name"
                onKeyUp={(e) => setFirstName(e.target.value)}
                errors={errorChain(errors, errors.firstName)}
              />
              <TextInput
                id="lastName"
                label="Last name"
                onKeyUp={(e) => setLastName(e.target.value)}
                errors={errorChain(errors, errors.lastName)}
              />

              <RadioSet
                legend="Select an option"
                name="radioSelection"
                options={[
                  { label: 'Select this', id: 'option1' },
                  { label: 'Select this too', id: 'option2' },
                ]}
                onClick={(e) => setRadioSelection(e.target.value)}
                errors={errorChain(errors, errors.radioSelection)}
              />

              <Button type="submit" className="margin-top-5">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page1;
