import React from 'react';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { Field } from 'formik';
import { Label } from '@trussworks/react-uswds';

const TextInput = ({ id, label, onKeyUp, errors, firstError, required }) => {
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
        type="text"
        className="usa-input"
        id={id}
        name={id}
        aria-required={required ? 'true' : null}
        onKeyUp={onKeyUp}
        innerRef={inputRef}
        aria-describedby={errors ? `${id}_error` : null}
        aria-invalid={errors ? 'true' : null}
        onBlur={() => {
          return false;
        }}
      />
    </div>
  );
};

TextInput.propTypes = {
  errors: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  firstError: PropTypes.string,
};

TextInput.defaultProps = {
  errors: '',
  required: false,
};

export default TextInput;
