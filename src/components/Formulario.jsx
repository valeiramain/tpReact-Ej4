import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    return (
        <>
            <Form className='container'>
                <Form.Group className="mb-3" controlId="inputTarea">
                    <div className="text-center">
                        <Form.Label>Ingresa tus Tareas</Form.Label>
                    </div>
                    <div className="d-md-flex gap-2">
                        <Form.Control type="text" placeholder="nombre de tarea..." />
                        <Button variant="primary" type="submit" className="mt-2 mt-md-0">Enviar</Button>
                    </div>
                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </>
    );
};

export default Formulario;