import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Views
import Landing from './Views/Landing';
import Faq from './Views/Faq';
import Catalogue from './Views/Catalogue';
import Pet from './Views/Pet';
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import LandingLogged from './Views/LandingLogged';
import CatalogueLogged from './Views/CatalogueLogged';
import FaqLogged from './Views/FaqLogged';
import PetLogged from './Views/PetLogged';

function App() {
  return (
    <div id="home">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/catalogo' element={<Catalogue />}/>
          <Route path='/mascota/:id' element={<Pet />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          {/*Vistas Logueado*/}
          <Route path='/Logged' element={<LandingLogged/>}/>
          <Route path='/catalogoLogged' element={<CatalogueLogged />}/>
          <Route path='/faqLogged' element={<FaqLogged />} />
          <Route path='/mascotaLogged/:id' element={<PetLogged />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
