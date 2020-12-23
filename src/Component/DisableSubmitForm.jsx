import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "Kawsar",
  email: "",
  comment: "",
};

const saveValues = {
    name: "Kawsar Ahamed",
    email: "imkawsar007@gmail.com",
    comment: "Code Evulation Channel is awesome.",
  };

const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().required("Required!"),
    comment: Yup.string().required("Required!")
})

const onSubmit = (values, onSubmitProps) => {
    //alert(JSON.stringify(values, null, 2))
    console.log('Form Data: ', values)
    console.log('Submit Props: ', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm();
}

function DisableSubmitForm() {
    const [saveData, setSaveData] = useState(null);
  return (
      <Formik 
          initialValues={saveData || initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
      >
        {formik=> {
          //console.log("Formik Props: ", formik)
          return (
            <Form>
              <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" component={TextError}/>
              </div>
              <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <Field type="email"name="email" id="email" />
                  <ErrorMessage name="email" component={TextError}/>
              </div>
              <div className="form-control">
              <label htmlFor="email">Comment</label>
                <Field type="text" name="comment" id="comment" />
                <ErrorMessage name="comment" component={TextError}/>
              </div>
              <button type="button" onClick={() => setSaveData(saveValues) }>Load Save data</button>
              <button type="submit" disabled={!formik.isValid || formik.setSubmitting}>Submit</button>
              <button type="reset">Reset</button>
            </Form>
          );
        }}
      </Formik>
  );
}

export default DisableSubmitForm;
