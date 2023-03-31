import React from 'react'
import {Field , ErrorMessage } from 'formik'

function TextArea(props) {

    const{label, name, ...rest} = props

  return (
    <div className='flex flex-col'>
        <label htmlFor={name}>{label} :</label>
        <Field 
        as='textarea' 
        name={name} 
        id={name}
        {...rest}
        />
        <ErrorMessage name={name}/>

    </div>
  )
}

export default TextArea