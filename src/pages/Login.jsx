import {useForm} from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import'../style/form.css'


const Login = () => {
const{ register, handleSubmit } = useForm()
const submit= data =>{
    console.log(data)
}

    return(

        <main>
        <Form onSubmit={handleSubmit(submit)}>
            <h1>LOGIN</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control
         type="email" 
         placeholder="Enter email" 
         {...register("email")}
         />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password"
         placeholder="Password" 
         {...register("password")}
         />
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
        </main>
    )
}

export default Login