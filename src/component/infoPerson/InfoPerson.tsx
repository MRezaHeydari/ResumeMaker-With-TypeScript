import React, {useCallback, useState} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ModalInputs from './modal/ModalInputs';
import { IPerson } from './interface/Interface';

function InfoPerson (): React.ReactElement {

    const [modalShow, setModalShow] = useState<boolean>(false);
    const [person, setPerson] = useState<IPerson>();

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow]);

    return (  
        <>
            <Container className="mt-3">   
                <ModalInputs 
                    Show={modalShow}
                    onHide={handleModalShow}
                    onAdd={setPerson}
                />             
                <Card>
                    <Card.Header className="d-flex justify-content-between">
                        <h4>Info Person</h4>
                        <Button variant="info" onClick={handleModalShow}>
                            Add Info
                        </Button>
                    </Card.Header>
                    <Row>
                        <Col md={4}>
                            <Card.Img variant="top" src="./images/image1.jpg" className="card-image"/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                        <ul>
                                            <li>
                                                <Row>
                                                    <Col>
                                                        <td>FirstName : </td>
                                                    </Col>
                                                    <Col>
                                                        <td>{person?.firstName}</td>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col>
                                                        <td>LastName : </td>
                                                    </Col>
                                                    <Col>
                                                        <td>{person?.lastName}</td>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col>
                                                        <td>Age : </td>
                                                    </Col>
                                                    <Col>
                                                        <td>{person?.age}</td>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col>
                                                        <td>MainLanguage : </td>
                                                    </Col>
                                                    <Col>
                                                        <td>{person?.mainLanguage}</td>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col>
                                                        <td>Email : </td>
                                                    </Col>
                                                    <Col>
                                                        <td>{person?.email}</td>
                                                    </Col>
                                                </Row>
                                            </li>
                                            <li>
                                                <Row>
                                                    <Col md={12}>
                                                        <td>AboutMe : </td>
                                                    </Col>
                                                    <Col md={12}>
                                                        <td>
                                                            <p className="about-me-text">
                                                                {person?.aboutMe}
                                                            </p>
                                                        </td>
                                                    </Col>
                                                </Row>
                                            </li>

                                            
                                        </ul>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
}

export default InfoPerson;