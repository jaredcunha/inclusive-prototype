import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const Radio = ({ id, name, label, onClick }) => {
  return (
    <div className="usa-radio">
      <Field
        className="usa-radio__input"
        id={id}
        type="radio"
        name={name}
        value={label}
        onClick={onClick}
      />
      <label className="usa-radio__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Radio;
