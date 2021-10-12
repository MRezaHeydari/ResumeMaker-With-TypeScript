import { Alert, Col, Row } from 'react-bootstrap';
import { IExpreince } from './interface/interface';

interface Props {
    id: number;
    experiences: IExpreince;
}

function Experience({id, experiences}: Props) {
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
                <Col md={8}>
                    <h5>{experiences.title}</h5>
                    <p>{experiences.description}</p>
                </Col>
            </Row>
        </>
    );
}

export default Experience;