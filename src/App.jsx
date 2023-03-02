import './App.css';
import Home from './components/pages/Home';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Mobiles from './components/pages/Mobiles';
import Products from './components/pages/Products'
import SignUp from './components/User/SignUp';
import Login from './components/User/Login';
import Oder from './components/pages/Oder';
function App() {
  return (
    <>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Mobiles' element={<Mobiles/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<Oder/>}/>
        <Route path='/product/:productName' element={<Products/>}/>
      </Routes>
    </>
  );
}

export default App;


// -> show details for purchasing 
// -> login sigin adderss email
