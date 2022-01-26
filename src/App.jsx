import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Name from './Components/Name'
import Address from './Components/Address'
import Contact from './Components/Contact'
import Review from './Components/Review'
import Footer from './Components/Footer'
import { FormProvider } from './Components/FormContext';

function App() {
  return (
      <FormProvider>
        <div className="App">
          <Router>  
            <Routes>  
              <Route path="/" exact element={<Name/>}/>
              <Route path="/address" element={<Address/>}/>
              <Route path="/contact" exact element={<Contact/>}/>
              <Route path="/review" exact element={<Review/>}/>
              {/* <Route path="/shop/:id" element={Item} /> */}
            </Routes>
            <Footer />
          </Router>
        </div>
      </FormProvider>
  );
}

export default App;
