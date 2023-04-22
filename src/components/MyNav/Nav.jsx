import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'

const Nav = () => {
  return (
    <nav className="my-nav nav navbar navbar-expand-lg w-100">
        <div className="container d-flex  nav.justified">
             <div className="nav-brand text-black h1 font-weight-bold">
                <img src="public/safsims-imagery/dark-logo.svg" alt="" />
            </div>
            <div className="my-nav-ul-con nav-item">
                <ul className=" nav-ul ">
                    <li className="nav-li nav-link  text-black font-weight-bold">Benefits</li>
                    <li className="nav-li nav-link text-black font-weight-bold">Features
                        {/* <ul className="nav-dropdown">
                            For schools
                        </ul> */}
                    </li>
                    <li className="nav-li nav-link  text-black font-weight-bold">Pricing</li>
                    <li className="nav-li nav-link  text-black font-weight-bold">Support</li>
                    <li className="get-started font-weight-bold text-white nav-link">Get started for free</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav