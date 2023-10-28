import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export const navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <link to='/' className='navbar-logo'>
                TRVL 
            </link>
        </div>
    </nav>
    </>
  )
}
