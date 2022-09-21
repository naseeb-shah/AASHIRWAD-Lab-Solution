import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './component/homepage';
import Inputdata from './component/inputdata';
import Dr from './component/down';
import Book from './component/book';
import Navbar from './layout';
import Report from './component/reports';
import Log from './component/login';
import Allrepo from './component/admin/allreport';
import Stahome from './component/stats/stats';
import { useSelector,useDispatch } from 'react-redux';
 export default function App() {
  var authtype=useSelector((e)=>e.auth.value)

  
  return (

    <BrowserRouter>  
          <Routes>
        <Route path="/" element={<Navbar />}>
       <Route  index element={<Home />} />
       <Route path= "/report" element={<Inputdata />} />
       <Route path= "/book" element={<Book />} />
       <Route path= "/dr" element={<Dr />} />
       <Route path= "/log" element={<Log/>} />
       <Route path= "/rep/:id" element={<Report />} />
       <Route path= "/all" element={<Allrepo />} />
       <Route path= "/sta" element={authtype.role=='admin'?<Stahome />:""} />
          </Route>
        
      </Routes>
</BrowserRouter>

  );
}



