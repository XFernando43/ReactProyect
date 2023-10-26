import './App.css'
import Main from './components/main'
import Detail from './components/details'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const App =()=>{
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>   
        <Route path='/details/:id' element={<Detail/>}/>   
      </Routes>
    
    </BrowserRouter>

    </>
  );
}

export default App
