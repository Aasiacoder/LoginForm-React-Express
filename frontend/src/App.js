import {BrowserRouter, Route, Routes} from "react-router-dom"
import Success from "./component/Success";
import Fail from "./component/Fail";
import Login from "./component/Login";

function App() {
  return(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/fail' element={<Fail />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App