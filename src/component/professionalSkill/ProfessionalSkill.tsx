import * as React from 'react';
import { ISkill } from './interface/interface';
import { ProgressBar, Button, Row, Col } from 'react-bootstrap';
import { useCallback } from 'react';

interface Skill {
    id: number;
    skill: ISkill;
    onDelete(id: number): void;
}

function ProfessionalSkill({id, skill, onDelete}: Skill) {

    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [id, onDelete])
    return (  
        <>
            <Row className='my-2 d-flex'>
                <Col>
                    <span className='skill-name'>{skill.skillName}</span>
                    <ProgressBar animated now={skill.skillPercentage} label={`${skill.skillPercentage}%`}/>
                </Col>
                
                <Col>
                    <Button variant='danger' onClick={handleDelete}>Delete</Button>
                    <Button variant='warning px-4'>Edit</Button>
                </Col>
            </Row>

        </>
    );
}

export default ProfessionalSkill;