import Link from 'next/link'
import { useState } from 'react'
import { menuTypes } from '../types/menuTypes'
import {FaBars} from 'react-icons/fa'
import Image from 'next/image'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        // NAVBAR
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          
            <Link href="/" className='text-sm font-poppinsRegular tracking-wide leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black'>
              <a><Image className='w-20' src="/logo.png" width={75} height={70} alt="" /></a>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col gap-5 lg:flex-row list-none lg:ml-auto">
              {
                menuTypes.map((item,index) => (
                    <li className="nav-item flex flex-col justify-center" key={index}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-poppinsRegular tracking-wide leading-snug text-black hover:opacity-75"
                  href={`${item.src}`}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">
                    {item.label}
                  </span>
                </a>
              </li>
                ))
              }
              <li>
                <Link href="application" >
                <button>Ön Kayıt Yap</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar