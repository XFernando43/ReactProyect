import './App.css'
import Main from './components/main'

const App =()=>{
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
    <Main url={url}/>
    </>
  );
}

export default App
