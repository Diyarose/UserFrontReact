import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';
import ViewUser from './components/ViewUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddUser/>}/>
      <Route path='/login' element={<LoginUser/>}/>
      <Route path='/view' element={<ViewUser/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
