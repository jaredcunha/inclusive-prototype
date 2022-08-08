import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import Select from '.';

describe('Select component', () => {
  const fruits = ['Apples', 'Bananas', 'Kiwis', 'Mangoes', 'Peaches'];
  const handleChange = jest.fn();
  const handleBlur = jest.fn();

  it('renders an accessible form field without errors', async () => {
    render(
      <Formik>
        <Select
          id="fruit"
          label="Choose a fruit"
          options={fruits}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Formik>,
    );
    expect(screen.getByRole('combobox')).toHaveAccessibleName();
    expect(screen.getByLabelText('Choose a fruit')).toBeInTheDocument();
  });

  it('renders an error message when there are errors', async () => {
    render(
      <Formik>
        <Select
          id="fruit"
          label="Choose a fruit"
          options={fruits}
          onChange={handleChange}
          onBlur={handleBlur}
          errors="You must select a fruit"
        />
      </Formik>,
    );
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-describedby',
      'fruit_error',
    );
    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
    expect(screen.getByText('You must select a fruit')).toBeInTheDocument();
  });

  it('sends focus to the select box if it is the first error in the form', async () => {
    render(
      <Formik>
        <Select
          id="fruit"
          label="Choose a fruit"
          options={fruits}
          onChange={handleChange}
          onBlur={handleBlur}
          errors="You must select a fruit"
          firstError="fruit"
        />
      </Formik>,
    );
    expect(screen.getByRole('combobox')).toHaveFocus();
  });
});
