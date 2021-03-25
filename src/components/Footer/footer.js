import PropTypes from "prop-types"
import React, { useState } from "react"

function Footer () {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="mx-auto bg-blue-900 p-3">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center">
        <div className="text-white">
          <h1 className="justify-center font-bold text-xl ">Column 1</h1>
          
        </div>
        <div className="">
          <h1 className="text-xl text-white self-start">COlumn 2</h1>
        </div>
        <div className="">
            <h1 className="text-xl text-white self-start"> Column 3</h1>
        </div>
      </div>
      
      
    </div>
  )
}

export default Footer