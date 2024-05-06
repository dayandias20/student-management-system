import axios from 'axios';
import './App.css';
import { Navbar } from './components/navbar';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Register } from './pages/register';
import { Profile } from './pages/profile';
import { StudentDetails } from './pages/student_details';
import EditStudent from './pages/edit_student';

function App() {

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>  
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/student/get_student/:id' element={<StudentDetails/>}></Route>
          <Route path='/student/edit/:id' element={<EditStudent />}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
