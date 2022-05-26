import './App.css';
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tools from './Pages/Home/Tools';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="tools" element={<Tools></Tools>}></Route>

{/* <Route
  path="tools/:toolsId"
  element={
    <RequireAuth>
      <Purchase></Purchase>
    </RequireAuth>
  }
></Route> */}
    </Routes>
    </div>
  );
}

export default App;