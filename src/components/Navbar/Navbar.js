import React, {useEffect} from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import {GiPapers} from "react-icons/gi";
import {FaBars} from "react-icons/fa";
import { search_icon } from '../../utils/images';
import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
    const {openSidebar} = useSidebarContext();

  return (
    <nav className='navbar bg-purple flex align-center'>
        <div className='container w-100'>
            <div className='navbar-content flex align-center justify-between'>
                <div className = "brand-and-toggler">
                    <Link to = "/" className='navbar-brand text-white flex align-center fs-26'>
                        <span className='navbar-brand-icon'>
                            <GiPapers />
                        </span>
                        <span className='navbar-brand-txt font-rubik fw-5'>Earning money</span>
                    </Link>
                </div>
                <div className='navbar-row flex align-center'>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
