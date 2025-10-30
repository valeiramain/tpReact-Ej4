import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ItemTarea from './ItemTarea';


const ListaTareas = ({ arrayTareas,borrarTarea }) => {
    return (
        <section className='container'>

            <ListGroup>
                {
                    arrayTareas.map((item,indice) => <ItemTarea key={indice} inputTarea={item} borrarTarea={borrarTarea}></ItemTarea>)
                }

            </ListGroup>
        </section>
    );
};

export default ListaTareas;