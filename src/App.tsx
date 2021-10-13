import React from 'react';
import Experiences from './component/Experience/Experiences';
import InfoPerson from './component/infoPerson/InfoPerson';
import ProfessionalSkills from './component/professionalSkill/ProfessionalSkills';
import Projects from './component/project/Projects';

function App() {
  return (
    <>
      <InfoPerson/>
      <ProfessionalSkills/>
      <Experiences/>
      <Projects/>
    </>
  );
}

export default App;
