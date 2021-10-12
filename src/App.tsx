import React from 'react';
import Experiences from './component/Experience/Experiences';
import InfoPerson from './component/infoPerson/InfoPerson';
import ProfessionalSkills from './component/professionalSkill/ProfessionalSkills';

function App() {
  return (
    <>
      <InfoPerson/>
      <ProfessionalSkills/>
      <Experiences/>
    </>
  );
}

export default App;
