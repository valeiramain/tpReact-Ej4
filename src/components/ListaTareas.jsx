import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ItemTarea from './ItemTarea';


const ListaTareas = ({ arrayTareas }) => {
    return (
        <section className='container'>

            <ListGroup>
                {
                    arrayTareas.map((item,indice) => <ItemTarea key={indice} inputTarea={item}></ItemTarea>)
                }

            </ListGroup>
        </section>
    );
};

export default ListaTareas;