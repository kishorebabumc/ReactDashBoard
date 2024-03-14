import React from 'react'
import './sidebar.css'

function SideBar() {
  return (
    <aside id='sidebar' className='sidebar'>
        <ul className="sidebar-nav" id='sidebar-nav'>
            <li className='nav-item'>
                <a className='nav-link' href='#'>
                    <i className='bi bi-grid'></i>
                    <span>DashBoard</span>
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='#'>
                    <i className='bi bi-menu-bottom-wise'></i>
                    <span>Documents</span>                    
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='#'>
                    <i className='bi bi-menu-bottom-wise'></i>
                    <span>Documents</span>                    
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='#'>
                    <i className='bi bi-menu-bottom-wise'></i>
                    <span>Documents</span>                    
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='#'>
                    <i className='bi bi-menu-bottom-wise'></i>
                    <span>Documents</span>                    
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link collapsed' data-bs-target='#components-nav' data-bs-toggle='collapse' href='#'>
                    <i className='bi bi-menu-bottom-wise'></i>
                    <span>Documents</span>                    
                </a>
            </li>
            
        </ul>
    </aside>
  )
}

export default SideBar