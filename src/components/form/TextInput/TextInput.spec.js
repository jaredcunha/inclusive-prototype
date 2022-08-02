import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import TextInput from '.';
import * as Yup from 'yup';

describe('TextInput component', () => {
  const onKeyUp = jest.fn();
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Provide a first name'),
    lastName: Yup.string().required('Provide a last name.'),
  });

  it('renders without errors', async () => {
    const initialValues = {
      firstName: 'Bob',
      lastName: 'Smith',
    };
    render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <TextInput
          type="text"
          id="firstName"
          label="First name"
          onKeyUp={onKeyUp}
        />
      </Formik>,
    );
    expect(screen.getByLabelText('First name')).toBeInTheDocument();
  });
});
