import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import TextInput from '.';

describe('TextInput component', () => {
  const onKeyUp = jest.fn();

  it('renders an accessible form field without errors', async () => {
    render(
      <Formik>
        <TextInput
          type="text"
          id="firstName"
          label="First name"
          onKeyUp={onKeyUp}
        />
      </Formik>,
    );
    expect(screen.getByRole('textbox')).toHaveAccessibleName();
    expect(screen.getByLabelText('First name')).toBeInTheDocument();
  });

  it('renders error message', async () => {
    render(
      <Formik>
        <TextInput
          type="text"
          id="firstName"
          label="First name"
          onKeyUp={onKeyUp}
          errors="Provide a first name"
        />
      </Formik>,
    );
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'firstName_error',
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Provide a first name')).toBeInTheDocument();
  });

  it('sends focus state to the input if the field is the first error on the page', async () => {
    render(
      <Formik>
        <TextInput
          type="text"
          id="firstName"
          label="First name"
          onKeyUp={onKeyUp}
          errors="Provide a first name"
          firstError="firstName"
        />
      </Formik>,
    );
    expect(screen.getByRole('textbox')).toHaveFocus();
  });
});
