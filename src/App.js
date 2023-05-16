import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import Landing from './Views/Landing';
import Faq from './Views/Faq';
import Catalogue from './Views/Catalogue';
import Pet from './Views/Pet';



function App() {
  return (
    <div id="home">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/catalogo/*' element={<Catalogue />}>
            <Route path='mascota' element={<Pet />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
