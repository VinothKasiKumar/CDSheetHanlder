 
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import TaksTracker from './pages/TaskTracker';
import ErrorTracker from './pages/ErrorTracker';
import TATTracker from './pages/TATTracker';

const NavBar = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path = 'taskTracker' element = {<TaksTracker />} />
                    <Route path = 'ErrorTracker' element = {<ErrorTracker />} />
                    <Route path = 'TatTracker' element = {<TATTracker />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
}
export default NavBar;