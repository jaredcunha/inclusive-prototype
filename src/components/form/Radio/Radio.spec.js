import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import Radio from '.';
import * as Yup from 'yup';

describe('Radio component', () => {
  const onClick = jest.fn();

  const validationSchema = Yup.object({
    radioOption: Yup.string().required('Select one option'),
  });

  it('renders without errors', async () => {
    render(
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Radio
          id="Radio"
          name="radioOptions"
          label="Test option"
          onClick={onClick}
        />
      </Formik>,
    );
    expect(screen.getByLabelText('Test option')).toBeInTheDocument();
  });
});
