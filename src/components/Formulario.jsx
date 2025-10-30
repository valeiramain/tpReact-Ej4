import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {
    const [arrayTareas, setArrayTareas] = useState([])
    const [inputTarea, setInputTarea] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const tareaBuscada = arrayTareas.find((item) => item.toLowerCase().trim() === inputTarea.toLowerCase().trim())
        if (tareaBuscada) {
            return alert('La tarea ya existe')
        }
        setArrayTareas([...arrayTareas, inputTarea.trim()])
        setInputTarea('')
    }

    const borrarTarea = (nombreTarea) => {
        const arrayFiltrado = arrayTareas.filter((item) => item !== nombreTarea.toLowerCase().trim())
        setArrayTareas(arrayFiltrado)
    }

    return (
        <>
            <Form className='container' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="inputTarea">
                    <div className="d-flex flex-column flex-md-row gap-2 align-items-md-start align-items-center">
                        <Form.Control type="text" placeholder="Ingrese la tarea" onChange={(e) => setInputTarea(e.target.value)} value={inputTarea} />
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
            <ListaTareas arrayTareas={arrayTareas} borrarTarea={borrarTarea}></ListaTareas>
        </>
    );
};

export default Formulario;