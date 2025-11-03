import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ItemTarea = ({inputTarea, borrarTarea}) => {
    return (
        <div>
            <ListGroup.Item className='d-flex justify-content-between align-items-center'>{inputTarea} <Button variant="outline-danger" onClick={()=>borrarTarea(inputTarea)}>
                <i className="text-danger bi bi-trash-fill"></i></Button>
                </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;
