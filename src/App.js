import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home'; 
import EnstaArchive from './pages/EnstaArchive/Enstarchive';
import FirstSemester from './pages/1S1/premiere1';
import SecondSemester from './pages/1S2/premiere2';
import FirstSemester2 from './pages/2S1/desieme1';
import SecondSemester2 from './pages/2S2/desieme2';
import LastSemester from './pages/3S/troisieme';
import SubjectResources from './pages/Matiere/matiere';
import Analyse from './1ere annee/S1/Analyse';
import Algo from './1ere annee/S1/Algo'
import Fluide from './1ere annee/S1/fluide';
import Proba from './1ere annee/S1/proba';
import './1ere annee/S1/semi';
import Semi from './1ere annee/S1/semi';
import Mecanique from './1ere annee/S1/mecanique';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EnstaArchive" element={<EnstaArchive/>} />
          <Route path="/premiere1" element={<FirstSemester/>} />
          <Route path="/premiere2" element={<SecondSemester/>} />
          <Route path="/desieme1" element={<FirstSemester2/>} />
          <Route path="/desieme2" element={<SecondSemester2/>} />
          <Route path="/troisieme" element={<LastSemester/>} />
          <Route path="/matiere" element={<SubjectResources/>} />
          <Route path="/Analyse" element={<Analyse/>}/>
          <Route path="/algo" element={<Algo/>}/>
          <Route path="/proba" element={<Proba/>}/>
          <Route path="/fluide" element={<Fluide/>}/>
          <Route path ="/semi"  element={<Semi/>}/>
          <Route path ="/mecanique"  element={<Mecanique/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;