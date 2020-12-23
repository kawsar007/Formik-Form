import React from 'react';
import { Field, ErrorMessage} from 'formik';
import TextError from './TextError';

function Textarea(props) {
    const {name, label, ...rest } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field as="textarea" type="text" name="message" id="message" {...rest} /> 
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Textarea
