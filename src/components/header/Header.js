import { NavLink } from 'react-router-dom';
import logoHeader from './logoHeader.png';
import './header.css';


function Header() {
  return (
    <div className="header-wrapper">
       <img src={logoHeader} className="headerLogo" alt="logo" />
       <div className="nav">
       <div className='nav-item'>
       <NavLink to ='/Characters'> Characters </NavLink>
       </div>
       <div className='nav-item'>
         <NavLink to ='/Episodes'> Episodes </NavLink>
       </div>
       <div className='nav-item'>
       <NavLink to ='/Locations'> Locations </NavLink>
       </div>
       <div className='nav-item'>
       <NavLink to ='/MyWatchList'> My watch list </NavLink>
       </div>
       </div>
    </div>
    
  );
}

export default Header;