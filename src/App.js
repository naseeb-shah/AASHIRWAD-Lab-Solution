import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/homepage';
import Inputdata from './component/inputdata';
import Book from './component/book';
import Navbar from './layout';


 export default function App() {

  return (

    <BrowserRouter>  
          <Routes>
        <Route path="/" element={<Navbar />}>
       <Route  index element={<Home />} />
       <Route path= "/report" element={<Inputdata />} />
       <Route path= "/book" element={<Book />} />
          </Route>
        
      </Routes>
</BrowserRouter>

  );
}



