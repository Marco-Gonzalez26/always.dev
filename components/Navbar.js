import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { HiBars3BottomLeft, HiOutlineXMark } from 'react-icons/hi2'
import { HiCode, HiOutlineSearch } from 'react-icons/hi'
import links from '../lib/links'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="flex justify-between border-b border-black h-20  p-5 sticky top-0 w-full left-0 right-0  bg-white z-10 items-center">
        <Link href="/" className=' '>
          <a className=" flex items-center gap-1 hover:scale-110 transition-all">
            <HiCode size={50} />
            <p className="text-2xl font-thin">always</p>
            <span className="text-2xl font-bold">dev</span>
          </a>
        </Link>
        <div className="hidden lg:flex gap-5 items-center">
          <div className='flex leading-relaxed items-center relative'>
          <HiOutlineSearch className='absolute left-4 text-gray-700 w-4 h-4 z-10 '/>
          <input
            placeholder="Search posts..."
            className="h-10 leading-relaxed px-4 py-0 w-full pl-10 border-transparent border-3 rounded-lg outline-none bg-white text-gray-900 shadow-md transition-all"
          />
          </div>
          {links?.map(({ title, path }) => {
            return (
              <Link key={path} href={path} className="hover:scale-105">
                {title}
              </Link>
            )
          })}
        </div>

        <HiBars3BottomLeft
          size={32}
          onClick={() => setOpen(!open)}
          className="md:hidden"
        />
      </nav>
      {open && (
        <AnimatePresence>
          <motion.ul
            transition={{ duration: 1 }}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            key="motion.ul"
            className=" flex flex-col gap-10 fixed top-0 right-0  h-full lg:w-1/3  w-1/2 items-center p-5 text-center lg:text-3xl sm:text-xl drop-shadow-lg backdrop-blur-2xl border-l border-black md:hidden z-50"
          >
            <HiOutlineXMark
              onClick={() => setOpen(!open)}
              size={45}
              className="rounded-full p-1 hover:scale-105 transition-all cursor-pointer"
            />
            {links?.map(({ title, path }) => {
              return (
                <Link key={path} href={path}>
                  <a
                    className="hover:scale-110 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {title}
                  </a>
                </Link>
              )
            })}
          </motion.ul>
        </AnimatePresence>
      )}
    </>
  )
}

export default Navbar
