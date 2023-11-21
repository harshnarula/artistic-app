import React from 'react';
import '../css/sidebar.css';
import { icons } from '../static/data';

export default function Sidebar() {
  return (
    <div className='sidebar-copyright'>
    <div className="sidebar">
      {icons.map((icon) => (
        <div className="icon" key={icon.id}>
            <img className="siderbar_img" src = {`../public/images/icons/${icon.img}`} />
            <p className="sidebar_title">{icon.title}</p>
        </div>
      ))}
        <div className='logout'>
            <img className='logout_img' />
            <p className = 'logout_text'>Logout</p>
        </div>

    </div>
    <div className='copyright'>
      <p className='privacy'>2022©logo name</p>
      <p className='copyright-owner'>Developed by ivan Infotech</p>
    </div>
    </div>
  );
}
