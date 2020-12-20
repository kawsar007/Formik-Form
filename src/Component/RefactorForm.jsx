import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phoneNumber: ['', ''],
  phNumbers: [''],
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
  comment: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  social: Yup.object({
    facebook: Yup.string().required("Required!"),
    instagram: Yup.string().required("Required!")
  })
});

function RefactorForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2>YouTube Form</h2>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
             {
               (errorMessage) => <div className="error">{errorMessage}</div>
             }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel">
             {
               (errorMessage) => <div className="error">{errorMessage}</div>
             }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field as="textarea" id="comment" name="comment" />
          <ErrorMessage name="comment">
             {
               (errorMessage) => <div className="error">{errorMessage}</div>
             }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
             { props => {
                // const { field, form, meta } = props;
                console.log('Render Field')
                 //console.log('Render Props', props)
                 return (
                   <div>
                     <input type="text" id="address" {...props.field}/>
                     {props.meta.touched && props.meta.error ? <div>{props.meta.error}</div>: null}
                   </div>
                 )
             }}
          </Field>
          <ErrorMessage name="address">
             {
               (errorMessage) => <div className="error">{errorMessage}</div>
             }
          </ErrorMessage>
        </div>

        {/* Manage Object */}

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type="text" name="social.facebook" id="facebook"/>
          <ErrorMessage name="social.facebook" component={TextError}/>
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <Field type="text" name="social.instagram" id="instagram"/>
          <ErrorMessage name="social.instagram" component={TextError}/>
        </div>

        {/* Manage Array */}

        <div className="form-control">
          <label htmlFor="primaryPh">Primary Phone Number</label>
          <Field type="text" name="phoneNumber[0]" id="primaryPh"/>
          {/* <ErrorMessage name="phoneNumber[0]" component={TextError}/> */}
        </div>
        <div className="form-control">
          <label htmlFor="secondaryPh">Primary Phone Number</label>
          <Field type="text" name="phoneNumber[1]" id="secondaryPh"/>
          {/* <ErrorMessage name="phoneNumber[1]" component={TextError}/> */}
        </div>

        <div className="form-control">
           <label htmlFor="phNumbers">List Of Phone Numbers</label>
           <FieldArray name="phNumbers">
              { fieldArrayProps => {
                const { form, push, remove } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;
                //console.log(fieldArrayProps, "fieldArrayProps")
                return (
                  <div>
                     {phNumbers.map((phNumber, index) => (
                       <div key={index}>
                           <Field name={`phNumbers[${index}]`} />
                           {
                             index > 0 && <button type="button" onClick={() => remove(index)}>-</button>
                           }
                           
                           <button type="button" onClick={() => push('')}>+</button>
                       </div>
                     ))}
                  </div>
                )
              }}
           </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default RefactorForm;
