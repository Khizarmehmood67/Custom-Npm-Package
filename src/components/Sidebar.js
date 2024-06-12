import React from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaUserCircle } from "react-icons/fa";
const Sidebar = ({ items}) => {
  return (
    <div>
      <div className="offcanvas offcanvas-start " tabIndex="-1" id="sidebar"  offcanvas-width="150px">
        <div className="offcanvas-header">
          <a  data-bs-dismiss="offcanvas" aria-label="Close" className='text-primary'>
          <FaBars />
          </a>
        </div>
        <div className="offcanvas-body">
        <ul className="nav flex-column">
       {items.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.link} className="nav-link">
                <IconContext.Provider value={{ className: 'sidebar-icon' }}>
                  {React.createElement(item.icon)}
                </IconContext.Provider>
                <span className="ms-2">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;