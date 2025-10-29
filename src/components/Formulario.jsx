import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    return (
        <>
            <Form className='container'>
                <Form.Group className="mb-3" controlId="inputTarea">
                    <div className="d-flex flex-column flex-md-row gap-2 align-items-md-start align-items-center">
                        <Form.Control type="text" placeholder="Ingrese la tarea" />
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