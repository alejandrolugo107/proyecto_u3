import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Pages/Login";
import MainMenu from './Pages/MainMenu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={ <MainMenu/>}/>
        <Route path="*" element={<div>404 NOT FOUND</div>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
