import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Radio from '../Radio';
import { Fieldset, ErrorMessage } from '@trussworks/react-uswds';

const RadioSet = ({ legend, name, options, onClick, errors }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (errors) {
      ref.current?.firstChild.focus();
    }
  }, [errors]);

  const wrapperClasses = classnames(
    'usa-form-group',
    errors && 'usa-form-group--error',
  );

  return (
    <div className={wrapperClasses} ref={ref}>
      <Fieldset
        legend={legend}
        legendStyle="default"
        tabIndex={errors ? `-1` : null}
        className={errors ? 'usa-fieldset--error' : null}
      >
        {errors && (
          <ErrorMessage name={name}>
            <span
              className="usa-error-message"
              id={`${name}_error`}
              role="alert"
            >
              {errors}
            </span>
          </ErrorMessage>
        )}
        {options.map((option, index) => (
          <Radio
            key={index}
            id={option.id}
            name={name}
            label={option.label}
            onClick={onClick}
          />
        ))}
      </Fieldset>
    </div>
  );
};

RadioSet.propTypes = {
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default RadioSet;
