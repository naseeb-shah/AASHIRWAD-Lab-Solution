import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Allrepo from './component/admin/allreport';
import Book from './component/book';
import Dr from './component/down';
import Home from './component/homepage';
import Inputdata from './component/inputdata';
import Log from './component/login';
import Report from './component/reports';
import Stahome from './component/stats/stats';
import Navbar from './layout';
import Pay from './component/stats/payment';
import Delte from './component/stats/delte';
import Incentive from './component/stats/commison';
import Main from './component/stats/main';
import Feedback from './component/feedback/givefeedback';
import Feed from './component/feedback/showrequest';
import Contact from './component/contactus/contact';

// import UpdateReport from './component/admin/updatereport'
import { useSelector } from 'react-redux';
export default function App() {
  var authtype = useSelector((e) => e.auth.value)


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/report" element={<Inputdata />} />
          <Route path="/book" element={<Book />} />
          <Route path="/dr" element={<Dr />} />
          <Route path="/log" element={<Log />} />
          <Route path="/feed" element={<Feedback />} />
          <Route path="/feedorg" element={<Feed />} />
          <Route path="/con" element={<Contact />} />

          <Route path="/rep/:id" element={<Report />} />
          <Route path="/all" element={<Allrepo />} />
          <Route path="/sta" element={<Stahome />} >

          
            <Route index element={<Main />} />
            <Route path='pay' element={<Pay />} />

            <Route path='delte' element={<Delte />} />
            <Route path='inn' element={<Incentive />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>

  );
}



