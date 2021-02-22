import * as React from 'react';
import { ErrorMessage } from 'formik';
import { Input } from 'antd';

export interface Field {
  name: string,
}

export interface Form {
  touched: any,
  errors: any,
}

export interface Props {
  field: Field,
  form: Form,
  fieldPrefix: React.ReactNode,
}

const FormField = ({
  field,
  form: { touched, errors },
  fieldPrefix,
  ...rest
}: Props) => (
  <div className={`form__field${touched[field.name] && errors[field.name] ? ' form__field--error' : ''}`}>
    <Input {...field} {...rest} className="error" prefix={fieldPrefix} />
    <ErrorMessage name={field.name} component="div" />
  </div>
);

export default FormField;
