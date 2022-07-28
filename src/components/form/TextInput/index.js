import { useRef, useEffect } from "react";
import classnames from "classnames";
import { Field, ErrorMessage } from "formik";
import { Label } from "@trussworks/react-uswds";

const TextInput = ({ id, label, onKeyUp, errors }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (errors) {
      inputRef.current?.focus();
    }
  }, [errors]);

  const wrapperClasses = classnames(
    "usa-form-group",
    errors && "usa-form-group--error"
  );

  const renderError = (message) => (
    <span className="usa-error-message" id={`${id}_error`} role="alert">
      {message}
    </span>
  );

  return (
    <div className={wrapperClasses}>
      <Label htmlFor={id} className={errors && `usa-label--error`}>
        {label}
      </Label>
      {errors && <ErrorMessage name={id} render={renderError} />}
      <Field
        type="text"
        className="usa-input"
        id={id}
        name={id}
        aria-required="true"
        onKeyUp={onKeyUp}
        innerRef={inputRef}
        aria-describedby={errors ? `${id}_error` : null}
      />
    </div>
  );
};

export default TextInput;
