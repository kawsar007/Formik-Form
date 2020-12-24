/* eslint-disable no-lone-blocks */
import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

{/*  This Checkbox component not perfectly work. */}

function CheckboxGroup(props) {
  const { label, options, name, ...rest } = props;
  return (
    <div className="form-control radio">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            //console.log("Field Value", field.value, "Option Value", option.value)
            console.log("Field", field);
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)} 
                 
                />             
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckboxGroup;
