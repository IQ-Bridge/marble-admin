import React, {useState, useEffect} from 'react';
import { validateForm } from '../../utils/FormUtility';
import {handleInputChange} from '../../utils/InputStateFunctions'


export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const rules = {
        email: {required: true},
        password: {required: true}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {checked} = validateForm(formData, rules)

        console.log('formdata', formData)

        if(checked){
            console.log('Registered sucessfully')
            register(formData)
        }else{
            console.log('something went wrong')
        }
    }

    const register = (formData) => {
        console.log(formData)
    }





  return (
    <div>
<form onSubmit={handleSubmit}>
    <input type="email" id='email' onChange={(e) => handleInputChange(e, setFormData)}/>
    <input type="password" id='password' onChange={(e) =>handleInputChange(e, setFormData)}/>
    <button>Login</button>
</form>
        


    </div>
  )
}
