import React from 'react'
import { Wrapper } from '../components/Wrapper'
import { Form, useNavigate } from 'react-router'

export const Update = () => {
    const navigate = useNavigate()
    function goBack() {
        navigate("/main")
    }
    
    async function updateGun(params) {
      console.log(params)
    }

  return (
   <Wrapper>
    <h1>Update</h1>
    <Form buttonText="Update" onCancel={goBack} submitForm={updateGun}/>
   </Wrapper>
  )
}
