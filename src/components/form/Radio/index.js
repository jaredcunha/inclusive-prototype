import { Field } from "formik";

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

export default Radio;
