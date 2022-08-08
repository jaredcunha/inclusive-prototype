import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../useSessionStorage';
import { Button } from '@trussworks/react-uswds';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { RadioSet, Select, TextInput } from '../components/form';

const Page1 = () => {
  const navigate = useNavigate();
  const [firstError, setFirstError] = useState('');
  const [firstName, setFirstName] = useSessionStorage('firstName', '');
  const [lastName, setLastName] = useSessionStorage('lastName', '');
  const [radioSelection, setRadioSelection] = useSessionStorage(
    'radioSelection',
    '',
  );
  const [dessert, setDessert] = useSessionStorage('dessert', '');

  const desserts = ['Cake', 'Pie', 'Ice cream'];

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required.'),
    radioSelection: Yup.string().required('An option is required.'),
    dessert: Yup.string().required('Please select a product'),
  });

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    radioSelection: radioSelection,
    dessert: dessert,
  };

  const handleSubmitClick = () => {
    setFirstError(null);
  };

  const onSubmit = () => {
    navigate('review');
  };

  return (
    <div className="padding-5">
      <h1>Test form</h1>

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
          {({ errors, isSubmitting, handleBlur, handleChange }) => {
            if (isSubmitting && Object.keys(errors)[0]) {
              setTimeout(() => setFirstError(Object.keys(errors)[0]), 0);
            }
            return (
              <Form>
                <TextInput
                  id="firstName"
                  label="First name"
                  onKeyUp={(e) => setFirstName(e.target.value)}
                  errors={errors.firstName}
                  firstError={firstError}
                />
                <TextInput
                  id="lastName"
                  label="Last name"
                  onKeyUp={(e) => setLastName(e.target.value)}
                  errors={errors.lastName}
                  firstError={firstError}
                />

                <RadioSet
                  legend="Select an option"
                  name="radioSelection"
                  options={[
                    { label: 'Select this', id: 'option1' },
                    { label: 'Select this too', id: 'option2' },
                  ]}
                  onClick={(e) => setRadioSelection(e.target.value)}
                  errors={errors.radioSelection}
                  firstError={firstError}
                />

                <Select
                  id="dessert"
                  label="Select box"
                  onChange={(e) => {
                    handleChange(e);
                    setDessert(e.target.value);
                  }}
                  onBlur={handleBlur}
                  errors={errors.dessert}
                  firstError={firstError}
                  options={desserts}
                  selectedOption={dessert}
                />
                <Button
                  type="submit"
                  className="margin-top-5"
                  onClick={() => handleSubmitClick()}
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Page1;
