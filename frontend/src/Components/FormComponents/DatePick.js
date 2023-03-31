import React from 'react'
import {Field , ErrorMessage } from 'formik'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePick(props) {

  const {label,name, ...rest} = props;
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <Field name={name} {...rest}>
        {
          ({form,field})=>{
            const {setFieldValue} = form;
            const {value} = field;
            return(
              <DatePicker 
              showIcon
              id={name}
              {...field}
              selected={value}
              onChange={val=> setFieldValue(name,val)}
              {...rest}
               />
            )
          }
        }
      </Field>
    </div>
  )
}

export default DatePick