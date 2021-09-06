import React from 'react'
import "./Header.css"

export default function Header({title}) {
   return (
       <>
          <h1 data-testid="main-title"
              className="header"
          >
             {title}
          </h1>
       </>
   )
}
