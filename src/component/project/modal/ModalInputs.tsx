import { Modal, Button, Form } from 'react-bootstrap';
import { useState, ChangeEvent, memo } from 'react';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

interface Props {
    show: boolean;
    onHide(): void;
    onAdd(name: string, link: string): void;
}

function ModalInputs({show, onHide, onAdd}: Props) {

    const [name, setName] = useState<string>('');
    const [link, setLink] = useState<string>('');

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'name') {
            setName(event.target.value);
        } else {
            setLink(event.target.value);
        }
        
    }, [])
    const handleAddProject = useCallback(() => {
        if(
            name.trim() !== '' &&
            link.trim() !== '' 
        ){
                onAdd(name, link);
                onHide();
        } else {
            toast.error("Fill in all empty fields");
        }
    }, [name, link, onAdd, onHide])
    
    return (  
        <>
            <Modal
                show={show}
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
                        <Form.Label>Name Project</Form.Label>
                        <Form.Control type="text" name='name' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInputExperienceEndTime">
                        <Form.Label>Link Project</Form.Label>
                        <Form.Control type="url" name='link' placeholder='https://example.com' onChange={handleChange}/>
                    </Form.Group>
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={onHide}>Close</Button>
                    <Button variant='success' onClick={handleAddProject}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default memo(ModalInputs);