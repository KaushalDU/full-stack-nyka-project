import React from 'react'
import './Sidebar.css'

const Sidenave = () => {
  return (
    <div className="sidebar">
      <h1>Nyka Dashboard</h1>
      <div className="subcontent">
        <div>
          <img src="\public\images\logo192.png" alt="" />
          <a href="#" className="active">
            Dashboard
          </a>
        </div>
        <div>
          <img src="" alt="" />
          <a href="#" className="active">
            Analytics
          </a>
        </div>
        <div>
          <img src="public\images" alt="" />
          <a href="#" className="active">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenave