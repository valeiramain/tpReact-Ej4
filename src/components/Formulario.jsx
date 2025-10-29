import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {
    const [arrayTareas,setArrayTareas] = useState([])
    const [inputTarea,setInputTarea] = useState('')

    const handleSubmit = (e)=>{
        console.log(inputTarea)
        e.preventDefault()
        setArrayTareas([...arrayTareas,inputTarea])
        setInputTarea('')
    }

    return (
        <>
            <Form className='container' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="inputTarea">
                    <div className="d-flex flex-column flex-md-row gap-2 align-items-md-start align-items-center">
                        <Form.Control type="text" placeholder="Ingrese la tarea" onChange={(e)=>setInputTarea(e.target.value)} value={inputTarea} />
                        <Button
                            variant="secondary"
                            type="submit"
                            className="mt-2 mt-md-0"
                        >
                            Enviar
                        </Button>
                    </div>

                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </>
    );
};

export default Formulario;