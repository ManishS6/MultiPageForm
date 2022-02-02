import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Basic from './Components/Basic'
import Education from './Components/Education'
import Job from './Components/Job'
import Review from './Components/Review'
import Resume from './Components/Resume'
import Summary from './Components/Summary';
import Skills from './Components/Skills';
import Extra from './Components/Extra';

import { FormProvider } from './Components/FormContext';

function App() {
  return (
      <FormProvider>
        <div className='App'>
          <Router>  
            <Routes >  
              <Route path="/" exact element={<Basic />}/>
              <Route path="/page/education" element={<Education/>}/>
              <Route path="/page/job" exact element={<Job/>}/>
              <Route path="/page/summary" exact element={<Summary/>}/>
              <Route path="/page/skills" exact element={<Skills/>}/>
              <Route path="/page/extra" exact element={<Extra/>}/>
              <Route path="/page/review" exact element={<Review/>}/>
            </Routes>
            <Resume/>
          </Router>
        </div>
      </FormProvider>
  );
}

export default App;
