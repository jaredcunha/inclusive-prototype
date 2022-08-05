import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import RadioSet from '.';
import * as Yup from 'yup';

describe('RadioSet component', () => {
  const onClick = jest.fn();

  it('renders without errors', async () => {
    render(
      <Formik>
        <RadioSet
          legend="Select an option"
          name="radioSelection"
          options={[
            { label: 'Select this', id: 'option1' },
            { label: 'Select this too', id: 'option2' },
          ]}
          onClick={onClick}
        />
      </Formik>,
    );
    expect(
      screen.getByRole('group', { name: 'Select an option' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Select this')).toBeInTheDocument();
    expect(screen.getByLabelText('Select this too')).toBeInTheDocument();
  });

  it('displays error message', async () => {
    render(
      <Formik>
        <RadioSet
          legend="Options"
          name="radioSelection"
          options={[
            { label: 'Select this', id: 'option1' },
            { label: 'Select this too', id: 'option2' },
          ]}
          onClick={onClick}
          errors="You must select an option"
        />
      </Formik>,
    );
    expect(screen.getByText('You must select an option')).toBeInTheDocument();
  });

  it('sends focus state to the fieldset if the field is the first error on the page', async () => {
    render(
      <Formik>
        <RadioSet
          legend="Options"
          name="radioSelection"
          options={[
            { label: 'Select this', id: 'option1' },
            { label: 'Select this too', id: 'option2' },
          ]}
          onClick={onClick}
          errors="You must select an option"
          firstError="radioSelection"
        />
      </Formik>,
    );
    expect(screen.getByRole('group')).toHaveFocus();
  });
});
