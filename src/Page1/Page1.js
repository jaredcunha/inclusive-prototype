import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../useSessionStorage";
import { Button } from "@trussworks/react-uswds";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextInput } from "../components/form";

const Page1 = () => {
  const [firstName, setFirstName] = useSessionStorage("firstName", "");
  const [lastName, setLastName] = useSessionStorage("lastName", "");

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Give a first name, idiot!"),
    lastName: Yup.string().required(
      "Ugggh. Last name!!!!! You forgot the last name."
    ),
  });

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
  };

  const errorChain = (errors, fieldError) => {
    if (errors[Object.keys(errors)[0]] === fieldError) {
      return fieldError;
    }
  };

  const onSubmit = () => {
    navigate("review");
  };

  return (
    <div className="padding-5">
      <h1>Test thing</h1>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
          }}
        >
          {({ errors }) => (
            <Form>
              <TextInput
                id="firstName"
                label="First name"
                onKeyUp={(e) => setFirstName(e.target.value)}
                errors={errorChain(errors, errors.firstName)}
              />
              <TextInput
                id="lastName"
                label="Last name"
                onKeyUp={(e) => setLastName(e.target.value)}
                errors={errorChain(errors, errors.lastName)}
              />
              <Button type="submit" className="margin-top-5">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page1;
