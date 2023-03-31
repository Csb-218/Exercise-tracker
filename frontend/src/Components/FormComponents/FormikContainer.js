import React,{useEffect,useState} from 'react'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormControl';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function FormikContainer() {

    const [selectOps, setSelectOps] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3001/activity')
        .then(res => setSelectOps(res.data))
        .catch(error => console.log(error))
    },[])

    const initialValues ={
        username:'',
        activity:'',
        description:'',
        duration:'',
        date:null
    }

    const validationSchema = Yup.object({
        username:Yup.string().required('Required !'),
        activity:Yup.string().required('Required !'),
        description:Yup.string().required('Required !'),
        duration:Yup.number().required('Required !').positive().integer(),
        date:Yup.date().required('Required !')
    })

    const onSubmit = val => {
        console.log('Form data', val);
        axios.post('http://localhost:3001/exercises/add',val)
        .then(console.log('Successful submission'))
        .catch(error => console.log(error));
        setTimeout(() => navigate('/'),2000)
    }

  return (
    <Formik 
    initialValues = {initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}
    >
        {
            formik => {
                
            console.log('Form',formik)
                return(
                    <Form className="form-frame-control" >
                        <FormikControl
                        control='input'
                        name='username'
                        label='Username'
                        className="form-control" />

                        <FormikControl 
                        control='select'
                        label='Select an activity'
                        name='activity'
                        options={selectOps}
                        className="form-control" />

                        <FormikControl 
                        control='textarea'
                        label='Description'
                        name='description'
                        className="form-control" />

                        <FormikControl 
                        type='number'
                        control='input'
                        label='Duration'
                        name='duration'
                        className="form-control w-2/12" />

                       <FormikControl 
                        control='date'
                        label='Date'
                        name='date'
                        className="form-control w-4/12" /> 

                        <button 
                        type="submit" 
                        className={(!formik.isValid || formik.isSubmitting)|| !formik.dirty?"button  bg-teal-500 hover:bg-teal-700 cursor-not-allowed":" button bg-teal-500 hover:bg-teal-700"}
                        disabled={(!formik.isValid || formik.isSubmitting) || !formik.dirty}>Submit</button>
                    </Form>
                )
            }
        }
        
    </Formik>
    
  )
}

export default FormikContainer