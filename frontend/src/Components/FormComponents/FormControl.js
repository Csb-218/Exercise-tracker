import React from 'react'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'
import DatePick from './DatePick'

function FormControl(props) {
    const{control,...rest} = props;
    
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'date':
            return <DatePick {...rest}/>
        default: 
        return null
  
    }
}

export default FormControl