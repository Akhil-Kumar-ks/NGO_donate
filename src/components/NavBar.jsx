import React from 'react'

function NavBar() {
    return (
        <div class="top">
           <nav className="navbar navbar-expand-lg  navbar-light"  >
      <div className="container-fluid">
          <div>
      <img src="https://img.icons8.com/external-those-icons-fill-those-icons/50/000000/external-call-mobile-telephone-those-icons-fill-those-icons.png" style={{width:"20px", height: "20px"}}/>
        <a className="navbar-brand " href="">+91 987653210</a>
        </div>
        <div>
        <img src="https://img.icons8.com/material-outlined/24/000000/address.png"/>
        <a className="navbar-brand" href="">Agile tech NGO, Mangalore </a>
        </div>
        <div className="Button">
        <button type="button" class="btn btn-dark">Donate</button>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default NavBar
