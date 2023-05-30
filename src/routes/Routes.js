import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/homepage/Homepage';

function Routing() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    );
}

export default Routing;