import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav>
            <ul className='menu'>
                <li>
                    <Link to='/' className='menu-link'>
                        Inicio
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
