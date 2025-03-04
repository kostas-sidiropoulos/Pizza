import React , { useState } from 'react'
import Logo from '../assets/Logopizza.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} className='logo'  id={openLinks ? "open" : "close"}/>
            <div className="hiddenLinks" id={openLinks ? "openlink" : "closelink"} >
              <Link to="/"> Home </Link>
              <Link to="/menu"> Menu </Link>
              <Link to="/about"> About </Link>
              <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
          <Link to="/"> Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar