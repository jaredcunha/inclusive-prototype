import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import TextInput from ".";
import * as Yup from "yup";

describe("TextInput component", () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Provide a first name"),
    lastName: Yup.string().required("Provide a last name."),
  });

  it("renders without errors", async () => {
    const initialValues = {
      firstName: "Bob",
      lastName: "Smith",
    };
    render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <TextInput type="text" id="firstName" label="First name" />
      </Formik>
    );
    expect(screen.getByLabelText("First name")).toBeInTheDocument();
  });
});
