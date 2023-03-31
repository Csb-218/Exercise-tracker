import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Field, Form, ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';


const CreateActivity = () => {

   const navigate = useNavigate();

  return (
    <>
    <Formik

    initialValues={
       {activityname: ''} 
    }

    validationSchema= {Yup.object({
        activityname: Yup.string().required('Cannot be empty').max(20,'Maximum 20 characters allowed').min(3,'Minimum 3 characters allowed')
    })}

    onSubmit={(values,{setSubmitting}) => {
        
            axios.post('http://localhost:3001/activity/add', values)
                .then(res => console.log(res.data))
                .catch(err => console.log(err));

            setTimeout(() => {
                alert(`Activity  Added`);
                setSubmitting(false);
                navigate('/exercises')
            },1000)
        }
    }>
        {
            formik =>{
                return(
                    <Form className='form-frame-control'>
                    <label htmlFor='activityname'>Exercise Name : </label>
                    <Field
                        name='activityname'
                        type='text'
                        className="form-control" />
                    <ErrorMessage name='activityname' />

                    <button 
                    type='submit' 
                    className={(!formik.dirty || !formik.values)||!formik.isValid?'button bg-teal-500 hover:bg-teal-700 cursor-not-allowed ':'button bg-teal-500 hover:bg-teal-700'} 
                    disabled={!formik.dirty || !formik.values} >Add Exercise</button>
                </Form>
                )
            }
        }
        
    </Formik>
    </>

  )
}

export default CreateActivity