import './App.css';
import NavBarPetludos from './componentes/NavBarPetludos';
import BodyPetludos from './componentes/BodyPetludos';
import TestimonyPetludos from './componentes/TestimonyPetludos';
import FooterPetludos from './componentes/FooterPetludos';

function App() {
  return (
    <div id="home">
      <NavBarPetludos />
      <BodyPetludos />
      <TestimonyPetludos />
      <FooterPetludos />
    </div>
  );
}

export default App;
