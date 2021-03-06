import { Form, Modal, Button, Row, Col } from 'react-bootstrap';
import { ChangeEvent, useCallback, useState, memo } from 'react';
import { IPerson } from '../interface/Interface';

interface Props {
    show: boolean;
    onHide(): void;
    onAdd(person: IPerson): void;
}

const NAME_INPUT_INFOPERSON = {
    FIRSTNAME: 'first-name',
    LASTNAME: 'last-name',
    AGE: 'age',
    MAINLANGUGE: 'main-languge',
    EMAIL: 'email',
    ABOUTME: 'about-me',
    IMAGE: 'image'
}

function ModalInputs({show, onHide, onAdd}: Props) {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [mainLanguage, setMainLanguage] = useState('');
    const [email, setEmail] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [image, setImage] = useState<File | string>();

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case NAME_INPUT_INFOPERSON.FIRSTNAME:
                setFirstName(event.target.value); 
                break;
            case NAME_INPUT_INFOPERSON.LASTNAME:
                setLastName(event.target.value);
                break;
            case NAME_INPUT_INFOPERSON.AGE:
                setAge(Number(event.target.value));
                break;
            case NAME_INPUT_INFOPERSON.MAINLANGUGE:
                setMainLanguage(event.target.value);
                break;
            case NAME_INPUT_INFOPERSON.EMAIL:
                setEmail(event.target.value);
                break;
            case NAME_INPUT_INFOPERSON.ABOUTME:
                setAboutMe(event.target.value);
                break;
            case NAME_INPUT_INFOPERSON.IMAGE:
                const files = (event.currentTarget as HTMLInputElement).files
                if (files && files.length > 0) {
                    setImage(URL.createObjectURL(files[0]));
                }
                break;      
        }
    }, [])

    const handleAddPerson = useCallback(() => {
        const person : IPerson = {firstName, lastName, age, mainLanguage, email, aboutMe, image, id: Date.now()}
        onAdd(person);
        onHide();
    }, [aboutMe, age, email, firstName, image, lastName, mainLanguage, onAdd, onHide]);
    return (  
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                    Info Person
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="" name="first-name" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="last-name" onChange={handleChange} placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" name="age" onChange={handleChange} placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicMainLanguage">
                                <Form.Label>Main Language</Form.Label>
                                <Form.Control type="text" name="main-languge" onChange={handleChange} placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={handleChange} placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" name="image" onChange={handleChange} placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicAboutMe">
                                <Form.Label>About Me</Form.Label>
                                <Form.Control as="textarea" name="about-me" onChange={handleChange} rows={3} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} variant="danger">Close</Button>
                    <Button variant="success" onClick={handleAddPerson}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default memo(ModalInputs);

