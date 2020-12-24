import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const dropdownOptions = [
  { key: "Select an option", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];

const radioOptions = [
  { key: "Option 1", value: "rOption1" },
  { key: "Option 2", value: "rOption2" },
  { key: "Option 3", value: "rOption3" },
];

const checkboxOptions = [
  { key: "Option 1", value: "cOption1" },
  { key: "Option 2", value: "cOption2" },
  { key: "Option 3", value: "cOption3" },
];

const initialValues = {
  email: "",
  message: "",
  selectOption: "",
  radioOption: "",
  checkboxOptions: [],
  birthDate: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required!"),
  message: Yup.string().required("Required!"),
  selectOption: Yup.string().required("Required!"),
  radioOption: Yup.string().required("Required!"),
  checkboxOptions: Yup.array().required("Required!"),
  birthDate: Yup.string().required("Required!").nullable(),
});

const onSubmit = (values) => {
  console.log(JSON.stringify(values, null, 2));
  // console.log(values, "My Data")
};

function FormikContainer() {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControl control="textarea" name="message" label="Message" />

            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
            />

            <FormikControl
              control="radio"
              label="Radio Topic: "
              name="radioOption"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              label="Checkbox Topic: "
              name="checkboxOption"
              options={checkboxOptions}
            />

            <FormikControl
              control="date"
              label="Pick a date"
              name="birthDate"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
