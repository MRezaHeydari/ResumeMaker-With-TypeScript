import { ISkill } from './interface/interface';
import { ProgressBar, Button, Row, Col } from 'react-bootstrap';
import { useCallback, useState, memo } from 'react';
import ModalInputs from './modal/ModalInputs';

interface Skill {
    id: number;
    skill: ISkill;
    onDelete(id: number): void;
    onEdite(id: number, newSkillName: string, newSkillPercentage: number): void;
}

function ProfessionalSkill({id, skill, onDelete, onEdite}: Skill) {

    const [modalShow, setModalShow] = useState<boolean>(false);

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow]);

    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [id, onDelete])

    const handleEdit = useCallback((newSkillName, newSkillPercenteage) => {
        onEdite(id, newSkillName, newSkillPercenteage);
    }, [id, onEdite])
    return ( 
        <>
            <Row className='my-2 d-flex'>
                <Col>
                    <span className='skill-name'>{skill.skillName}</span>
                    <ProgressBar animated now={skill.skillPercentage} label={`${skill.skillPercentage}%`}/>
                </Col>
                
                <Col>
                    <Button variant='danger' onClick={handleDelete}>Delete</Button>
                    <Button variant='warning px-4' onClick={handleModalShow}>Edit</Button>
                    <div>
                        <ModalInputs 
                            onShow={modalShow}
                            onHide={handleModalShow}
                            onAdd={handleEdit}
                        />
                    </div>
                </Col>
            </Row>

        </>
    );
}

export default memo(ProfessionalSkill);