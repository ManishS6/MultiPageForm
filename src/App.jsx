import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Basic from './Components/Basic'
import Education from './Components/Education'
import Contact from './Components/Contact'
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
              <Route path="/contact" exact element={<Contact/>}/>
              <Route path="/skills" exact element={<Skills/>}/>
              <Route path="/summary" exact element={<Summary/>}/>
              <Route path="/extra" exact element={<Extra/>}/>
              <Route path="/review" exact element={<Review/>}/>
              {/* <Route path="/shop/:id" element={Item} /> */}
            </Routes>
            <Resume/>
          </Router>
        </div>
      </FormProvider>
  );
}

export default App;
