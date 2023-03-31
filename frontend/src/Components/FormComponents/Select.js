import React from 'react'
import {Field , ErrorMessage } from 'formik'

function Select(props) {
    const {label,name,options , ...rest} = props
  return (
    <div className='flex flex-col'>
        <label htmlFor={name} >{label}: </label>
        <Field as='select' name={name} id={name} {...rest} >
             <option  value=''> </option>
            {
                options.map(option =>{
                    return(
                        <option key={option.id} value={option.activityname}>{option.activityname}</option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name}/>
    </div>

  )
}

export default Select