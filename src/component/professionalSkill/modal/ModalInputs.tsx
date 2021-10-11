import * as React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useCallback, useState, ChangeEvent, memo } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    onShow: boolean;
    onHide(): void;
    onAdd(skillName: string, skillPercentAge: number): void;
}

function ModalInputs({onShow, onHide, onAdd}: Props) {

    const [skillName, setSkillName] = useState<string>('');
    const [skillPercentage, setSkillPercentage] = useState<number>(0);

    const handleAddInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'skill-name') {
            setSkillName(event.target.value);
        } else {
            setSkillPercentage(Number(event.target.value));
        }
    }, [])

    const handleAddSkill = useCallback(() => {
        if(skillPercentage <= 100 && skillPercentage >= 0) {
            onAdd(skillName, skillPercentage);
            onHide();
        } else {
            toast.error("The number is out of range");
        }
    }, [onAdd, onHide, skillName, skillPercentage])
    return (  
        <>
            
                <Modal
                show={onShow}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="ControlInputSkillName">
                            <Form.Label>Skill Name</Form.Label>
                            <Form.Control type="text" name="skill-name" onChange={handleAddInput}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="ControlInputSkillPercentage">
                            <Form.Label>Skill Percentage</Form.Label>
                            <Form.Control type="number" min="0" max="100" name="skill-percentage" onChange={handleAddInput} />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={onHide}>Close</Button>
                        <Button variant='success' onClick={handleAddSkill}>Add</Button>
                    </Modal.Footer>
                </Modal>
                <ToastContainer />
        </>
    );
}

export default memo(ModalInputs);


