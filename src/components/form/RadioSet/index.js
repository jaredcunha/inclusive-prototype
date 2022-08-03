import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Radio from '../Radio';
import { Fieldset } from '@trussworks/react-uswds';

const RadioSet = ({ legend, name, options, onClick, errors, firstError }) => {
  const ref = useRef(null);
  const isFirstError = name === firstError ? true : false;

  useEffect(() => {
    if (isFirstError) {
      ref.current?.firstChild.focus();
    }
  }, [isFirstError]);

  const wrapperClasses = classnames(
    'usa-form-group',
    errors && 'usa-form-group--error',
  );

  return (
    <div className={wrapperClasses} ref={ref}>
      {/* TODO: set up to put error message as line in legend  */}
      <Fieldset
        legend={legend}
        legendStyle="default"
        tabIndex={isFirstError ? `-1` : null}
        className={errors ? 'usa-fieldset--error' : null}
      >
        {errors && (
          <span className="usa-error-message" id={`${name}_error`} role="alert">
            {errors}
          </span>
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
  firstError: PropTypes.string,
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

RadioSet.defaultProps = {
  errors: '',
};

export default RadioSet;
