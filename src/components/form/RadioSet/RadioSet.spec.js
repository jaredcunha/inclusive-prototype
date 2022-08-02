import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import RadioSet from ".";
import * as Yup from "yup";

describe("RadioSet component", () => {
  const validationSchema = Yup.object({
    radioOption: Yup.string().required("Select one option"),
  });

  it("renders without errors", async () => {
    render(
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <RadioSet
          legend="Select an option"
          name="radioSelection"
          options={[
            { label: "Select this", id: "option1" },
            { label: "Select this too", id: "option2" },
          ]}
        />
      </Formik>
    );
    expect(
      screen.getByRole("group", { name: "Select an option" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Select this")).toBeInTheDocument();
    expect(screen.getByLabelText("Select this too")).toBeInTheDocument();
  });
});
