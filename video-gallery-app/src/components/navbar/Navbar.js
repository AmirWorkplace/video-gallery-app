import React from "react"
import Search from "./Search"

import { image } from "../../assets"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='bg-slate-100 shadow-md'>
      <div className='max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3'>
        <Link to='/'>
          <img className='h-10' src={image.lws} alt='Learn with Sumit' />
        </Link>

        <Search searchImg={image.search} />
      </div>
    </nav>
  )
}
