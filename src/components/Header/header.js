import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../../logo.svg"

 
function NavItem({ location ,text }){
  // Function to display Navbar Items
  return <a className="flex lg:flex text-black mb-3 py-3 lg:py-0 lg:px-0 hover:text-blue-500 pl-4 border-l-4 lg:border-l-0 border-transparent" activeClassName="border-l-4 lg:border-l-0 lg:border-b-2 border-blue-500" href={location }> { text } </a>
}

function Header ({ siteTitle }) {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full top-0">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap mx-auto py-4">
          <div className=" flex-shrink-0 text-white">
            <img className=" h-8 md:h-10 pl-5" src={logo} alt="Logo" />
          </div>
          <div className=" float-right flex lg:hidden">
            <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center mr-4 text-black hover:text-grey">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={`${ isExpanded ? ``: `hidden` } block lg:flex w-full lg:w-3/5 lg:justify-around transition delay-1000 skew-3`}>
            <NavItem text="Home" location="/" />
            <NavItem text="About" location="/" />
            <NavItem text="Services" location="/" />
            <NavItem text="Client" location="/" />
            <NavItem text="Contact" location="/" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header