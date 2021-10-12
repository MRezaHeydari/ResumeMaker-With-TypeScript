import { Card, Button, Container } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import ModalInputs from './modal/ModalInputs';
import { IExpreince } from './interface/interface';
import Experience from './Expereince';
import { toast } from 'react-toastify';

function Experiences() {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [experiences, setExperiences] = useState<IExpreince[]>([]);

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow]);

    const handleAddExpreince = useCallback((startTime, endTime, title, description) => {
        if(!experiences.find((experience) => experience.title === title)) {
            const newExperience: IExpreince = {startTime, endTime, title, description, id : Date.now() }
            setExperiences([...experiences, newExperience]);
        } else {
            toast.error('This experience has already been registered')
        }
    }, [experiences])
    console.log(experiences);
    return (  
        <>
            <Container className="mt-3">
                <ModalInputs 
                    Show={modalShow}
                    onHide={handleModalShow}
                    onAdd={handleAddExpreince}
                />
                <Card>
                    <Card.Header className='d-flex justify-content-between'>
                        <h4>Expreiences</h4>
                        <Button variant="info" onClick={handleModalShow}>
                            Add Expreiences
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        {experiences.map((experience) => (
                            <Experience 
                                id={experience.id}
                                key={experience.id}
                                experiences={experience}
                            />
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Experiences;