import React from 'react'
import "../styles/navBar.css"
import { Link } from 'react-router-dom';
const list = [{ path: '/', name: 'Home' }, { path: '/Skills', name: 'Skills' }, { path: '/Project', name: 'Project' }, { path: '/Experience', name: 'Experience' }, { path: '/About', name: 'About' }]


const menuHandle = () => {
  if (document.querySelector('#menus').style.display === "none") {
    document.querySelector('#menus').style.display = "block";
  } else {
    document.querySelector('#menus').style.display = "none";
  }
}


function Navbar() {
  return (
    <div className='nav' >
      <div className="navBar" >
        <div >
          <h2 id='navHeading' > Home </h2>
        </div >
        <div className='navList' >
          <ul id='menus' > {
            list.map(data => (< li >
              <Link style={
                { textDecoration: 'none' }
              }
                
                to={data.path} > {data.name} </Link>
            </li >))
          } </ul>
          <button onClick={menuHandle}
            className='menuIcon' > < img src="https://img.icons8.com/color/48/000000/fries-menu.png"
              alt='images' />
          </button>
          <a className='btn'
            href='https://drive.google.com/file/d/1erRNJc2R7QIxdSv-SDFRq6ibm8_c-P4c/view?usp=drivesdk'
            > resume
          </a>
        </div >
      </div>
    </div >
  )
}

export default Navbar;
