import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

function App () {
    return (
    <Router >
        <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/movie/:id" element={<Detail />}>
            </Route>
            <Route exact path="/" element={<Home/>}>
            </Route>    
        </Routes>
    </Router>);
}

export default App;