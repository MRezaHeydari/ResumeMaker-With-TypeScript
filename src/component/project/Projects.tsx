import { Card, Button, Container } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { IProject } from './interface/interface';
import Project from './Project';
import ModalInputs from './modal/ModalInputs';

function Projects (): React.ReactElement {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [projects, setProjects] = useState<IProject[]>([]);

    const handleModalShow = useCallback(() => {
        setModalShow(!modalShow);
    }, [modalShow]);

    const handleAddProject = useCallback((name, link) => {
        if(!projects.find((project) => project.name === name)) {
            const newProject: IProject = {name, link, id : Date.now() }
            setProjects([...projects, newProject]);
        } else {
            toast.error('This project has already been created')
        }
    }, [projects])
    console.log(projects);
    const handelDeleteProject = useCallback((id) => {
        setProjects(projects.filter((project) =>{ return project.id !== id}))
    }, [projects])

    const handelEditProject = useCallback((id, name, link) => {
        if(!projects.find((project) => project.name === name)) {
            setProjects(projects.map((project) => (
                project.id === id ? ({name, link, id}) : (project)
            )))
        } else {
            toast.error('This project has already been created')
        }
    }, [projects])
    return (  
        <>
            <Container className="mt-3">
                <ModalInputs 
                    show={modalShow}
                    onHide={handleModalShow}
                    onAdd={handleAddProject}
                />
                <Card>
                    <Card.Header className='d-flex justify-content-between'>
                        <h4>Projecs</h4>
                        <Button variant="info" onClick={handleModalShow}>
                            Add Projecs
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        {projects.map((project) => (
                            <Project 
                                id={project.id}
                                key={project.id}
                                projects={project}
                                onDelete={handelDeleteProject}
                                onEdit={handelEditProject}
                            />
                        ))}
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Projects;