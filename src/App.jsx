import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Result from "./Components/Result";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/result' element={<Result/>} />
            </Routes>
        
        </>
    )
}

export default App;