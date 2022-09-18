import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './component/homepage';
import Inputdata from './component/inputdata';
import Dr from './component/down';
import Book from './component/book';
import Navbar from './layout';
import Report from './component/reports';

 export default function App() {

  return (

    <BrowserRouter>  
          <Routes>
        <Route path="/" element={<Navbar />}>
       <Route  index element={<Home />} />
       <Route path= "/report" element={<Inputdata />} />
       <Route path= "/book" element={<Book />} />
       <Route path= "/dr" element={<Dr />} />
       <Route path= "/rep/:id" element={<Report />} />
          </Route>
        
      </Routes>
</BrowserRouter>

  );
}



