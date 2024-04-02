import { Outlet, Link } from "react-router-dom";
import Logo from '../Assets/Paragon-logo-01.png';
import './Layout.css';
const Layout = () => {
    return <div className="h-20">
        <nav className="p-10 bg-sky-500 relative z-20 ">
            
            <ul className="md:flex gap-10 pr-10 items-center text-xl font-bold">
                <li>
                <Link to='/'><img src={Logo} className="h-[20px] w-[105px] gap-20 flex" /></Link>
                </li>
                <li>
                    <Link to='/' className="text-white hover:text-black">Home</Link>
                </li>
                <li>
                    <Link to='/taskTracker' className="text-white hover:text-black">Taks Tracker</Link>
                </li>
                <li>
                    <Link to='/ErrorTracker' className="text-white hover:text-black">Error Tracker</Link>
                </li>
                <li>
                    <Link to='/TatTracker' className="text-white hover:text-black">TAT Tracker</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}
export default Layout;