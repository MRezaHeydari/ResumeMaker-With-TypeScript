import { Alert, Col, Row, Button } from 'react-bootstrap';
import { IExpreince } from './interface/interface';
import { useCallback, useState, memo } from 'react';
import ModalInputs from './modal/ModalInputs';

interface Props {
    id: number;
    experiences: IExpreince;
    onDelete(id: number): void;
    onEdit(
        id: number,
        startTime: string, 
        endTime: string, 
        title: string, 
        description: string): void;
}

function Experience({id, experiences, onDelete, onEdit}: Props) {
    
    const [modalShow, setModalShow] = useState<boolean>(false);

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow])

    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [onDelete, id])

    const handleEdit = useCallback((startTime, endTime, title, description) => {
        onEdit(id, startTime, endTime, title, description);
    }, [id, onEdit])
    return (  
        <>
            <Row>
                <Col md={3}>
                    <h6 className='text-center'>
                        <Alert variant='success'>
                        <span>{experiences.startTime}</span> - <span>{experiences.endTime}</span>    
                        </Alert>
                    </h6>
                </Col>
                <Col md={6}>
                    <h5>{experiences.title}</h5>
                    <p>{experiences.description}</p>
                </Col>
                <Col md={3}>
                    <Button variant='danger' onClick={handleDelete}>Delete</Button>
                    <Button className="px-4" onClick={handleModalShow} variant='warning'>Edit</Button>
                    <div>
                        <ModalInputs 
                            show={modalShow}
                            onHide={handleModalShow}
                            onAdd={handleEdit}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default memo(Experience);

