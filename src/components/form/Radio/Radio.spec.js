import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import Radio from '.';

describe('Radio component', () => {
  const onClick = jest.fn();

  it('renders without errors', async () => {
    render(
      <Formik>
        <Radio
          id="Radio"
          name="radioOptions"
          label="Test option"
          onClick={onClick}
        />
      </Formik>,
    );
    expect(screen.getByRole('radio')).toHaveAccessibleName();
    expect(screen.getByLabelText('Test option')).toBeInTheDocument();
  });
});
