import * as React from 'react';
import { useState } from 'react';
import { ISkill } from './interface/interface';
import { Card, Container, Button } from 'react-bootstrap';
import ModalInputs from './modal/ModalInputs';
import { useCallback } from 'react';
import ProfessionalSkill from './ProfessionalSkill';

function ProfessionalSkills(): React.ReactElement {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [skills, setSkills] = useState<ISkill[]>([]);
    

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow]);

    const handleAddSkill = useCallback((newSkillName, newSkillPercentage) => {
        const newSkill: ISkill = {skillName: newSkillName, skillPercentage: newSkillPercentage, id: Date.now()}
        setSkills([...skills, newSkill]);
    }, [skills])
    
    // const handleDeleteSkill = useCallback((id) => {
    //     setSkills(skills.filter((skill) => {return skill.id !== id}))
    // }, [skills])
    return (  
        <>
            <Container className="mt-3">
                <ModalInputs 
                    onShow={modalShow}
                    onHide={handleModalShow}
                    onAdd={handleAddSkill}
                />
                <Card>
                    <Card.Header className="d-flex justify-content-between">
                        <h4>
                            Professional Skills
                        </h4>
                        <Button variant="info" onClick={handleModalShow}>
                            Add Skills
                        </Button>
                    </Card.Header>
                    <Card.Body>
                    {skills.map((skill: ISkill) => (
                        <ProfessionalSkill
                            id={skill.id}
                            key={skill.id}
                            skill={skill}
                            // onDelete={handleDeleteSkill}
                        />
                    ))}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default ProfessionalSkills;