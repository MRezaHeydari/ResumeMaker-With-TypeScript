import { Col, Row, Button } from 'react-bootstrap';
import { useCallback, useState, memo } from 'react';
import { IProject } from './interface/interface';
import ModalInputs from './modal/ModalInputs';

interface Props {
    id: number;
    projects: IProject;
    onDelete(id: number): void;
    onEdit(
        id: number,
        name: string, 
        link: string): void;
}

function Project ({id, projects, onDelete, onEdit}: Props) {
    
    const [modalShow, setModalShow] = useState<boolean>(false);

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow])

    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [onDelete, id])

    const handleEdit = useCallback((name, link) => {
        onEdit(id, name, link);
    }, [id, onEdit])
    return (  
        <>
            <Row>
                <Col md={3}>
                    <h5>{projects.name}</h5>
                </Col>
                <Col md={6}>
                    <h6>{projects.link}</h6>
                </Col>
                <Col md={3}>
                    <Button variant='danger' onClick={handleDelete}>Delete</Button>
                    <Button variant='warning' className='px-4' onClick={handleModalShow}>Edit</Button>
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

export default memo(Project);

