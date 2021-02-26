import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import './Sidebar.css';

import { SidebarItems } from './SidebarItems';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return(
    <>
      <Link className="sidebar-button">
        <HiOutlineMenu className='sidebar-button-icon' onClick={() => toggleSidebar()} />
      </Link>
      <nav className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
        <div className="sidebar-menu">
        <ul className="sidebar-items" onClick={() => toggleSidebar()}>
          {SidebarItems.map((item, index) => {
            return(
              <li key={index}>
                <Link className='sidebar-text' to={item.path}>{item.icon}<span>{item.title}</span></Link>
              </li>
            );
          })}
        </ul>
        </div>
        <div className="sidebar-empty" onClick={() => toggleSidebar()}/>
      </nav>
    </>
  );
}