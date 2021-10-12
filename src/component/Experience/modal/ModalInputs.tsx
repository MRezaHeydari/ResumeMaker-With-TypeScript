import { Modal, Button, Form } from 'react-bootstrap';
import { useState, ChangeEvent } from 'react';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

interface Props {
    Show: boolean;
    onHide(): void;
    onAdd(startTime: string, endTime: string, title: string, description: string): void;
}

const NAME_INPUT_EXPERIENCE = {
    START_TIME : 'start-time',
    END_TIME : 'end-time',
    TITLE : 'title',
    DESCRIPTION : 'description'
}

function ModalInputs({Show, onHide, onAdd}: Props) {

    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case NAME_INPUT_EXPERIENCE.START_TIME :
                setStartTime(event.target.value);
                break;
            case NAME_INPUT_EXPERIENCE.END_TIME :
                setEndTime(event.target.value);
                break;
            case NAME_INPUT_EXPERIENCE.TITLE :
                setTitle(event.target.value);
                break;
            case NAME_INPUT_EXPERIENCE.DESCRIPTION :
                setDescription(event.target.value);
                break;
        }
    }, [])
    const handleAddExperience = useCallback(() => {
        if( startTime !== 'mm/dd/yyyy' && 
            endTime !== 'mm/dd/yyyy' &&
            title.trim() !== '' &&
            description.trim() !== '' 
        ){
            if( startTime < endTime) {
                onAdd(startTime, endTime, title, description);
                onHide();
            } else {
                toast.error("Dates are not acceptable");
            }
        } else {
            toast.error("Fill in all empty fields");
        }
    }, [description, endTime, onAdd, onHide, startTime, title])
    return (  
        <>
            <Modal
                show={Show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Experiences
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="ControlInputExperienceStartTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="date" name='start-time' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInputExperienceEndTime">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="date" name='end-time' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInputExperienceTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInputExperienceDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name='description' rows={3}  onChange={handleChange}/>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={onHide}>Close</Button>
                    <Button variant='success' onClick={handleAddExperience}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalInputs;