import { Form } from '../components/UI/Form'
import { Wrapper } from '../components/Wrapper'
import { useNavigate } from 'react-router'

export const Create = () => {
    const navigate = useNavigate()
    function goBack() {
        navigate("/main")
    }

    async function createGun(params) {
      navigate('')
    }

  return (
   <Wrapper>
    <h1>Create</h1>
    <Form buttonText="save" onCancel={goBack} submitForm={createGun}/>
   </Wrapper>
  )
}
