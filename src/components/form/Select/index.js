import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { Field } from 'formik';
import { Label } from '@trussworks/react-uswds';

const Select = ({
  id,
  label,
  errors,
  options,
  firstError,
  onChange,
  required,
  selectedOption,
  onBlur,
}) => {
  const inputRef = useRef(null);
  const isFirstError = id === firstError ? true : false;

  useEffect(() => {
    if (isFirstError) {
      inputRef.current?.focus();
    }
  }, [isFirstError]);

  const wrapperClasses = classnames(
    'usa-form-group',
    errors && 'usa-form-group--error',
  );

  return (
    <div className={wrapperClasses}>
      <Label htmlFor={id} className={errors && `usa-label--error`}>
        {label}
      </Label>
      {errors && (
        <span
          className="usa-error-message"
          id={`${id}_error`}
          role={isFirstError ? 'alert' : null}
        >
          {errors}
        </span>
      )}
      <Field
        as="select"
        className="usa-select"
        id={id}
        name={id}
        aria-required={required ? 'true' : null}
        onChange={onChange}
        innerRef={inputRef}
        aria-describedby={errors ? `${id}_error` : null}
        aria-invalid={errors ? 'true' : null}
        value={selectedOption ? selectedOption : ''}
        onBlur={onBlur}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
    </div>
  );
};

Select.propTypes = {
  errors: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool.isRequired,
  firstError: PropTypes.string,
  selectedOption: PropTypes.string,
};

Select.defaultProps = {
  errors: '',
  required: false,
};

export default Select;
