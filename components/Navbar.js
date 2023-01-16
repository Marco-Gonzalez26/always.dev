import { useRef, useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { HiBars3BottomLeft, HiOutlineXMark } from 'react-icons/hi2'
import { HiCode } from 'react-icons/hi'
import links from '../lib/links'
import SearchBox from './SearchBox'
import Hits from './Hits'

function Navbar() {
  const [open, setOpen] = useState(false)
  const searchClient = algoliasearch(
    'JQRV8YDQDC',
    '890d75ece43eb38f01c9f8b308e65f82'
  )
  const inputRef = useRef(null)

  return (
    <>
      <nav className="flex justify-between border-b border-black h-20  p-5  top-0 w-full left-0 right-0  bg-white z-10 items-center ">
        <Link href="/">
          <a className=" flex items-center gap-1  hover:scale-110">
            <HiCode size={50} />
            <p className="text-2xl font-thin">always</p>
            <span className="text-2xl font-bold">dev</span>
          </a>
        </Link>
        <div className="hidden lg:flex gap-5 items-center">
          <div>
            <InstantSearch searchClient={searchClient} indexName="always-dev">
              <SearchBox loadingIndicator={true} inputRef={inputRef} z/>
              <Hits inputRef={inputRef}/>
            </InstantSearch>
          </div>

          {links?.map(({ title, path }) => {
            return (
              <Link key={path} href={path}>
                <a className=" hover:underline underline-offset-4 transition-all text-lg font-mono">
                  {title}
                </a>
              </Link>
            )
          })}
        </div>

        <HiBars3BottomLeft
          size={32}
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
        />
      </nav>
      {open && (
        <AnimatePresence>
          <motion.ul
            transition={{ duration: 0.2 }}
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            key="motion.ul"
            className=" flex flex-col gap-10 fixed top-0 right-0  h-full lg:w-1/3  w-1/2 items-center p-5  lg:text-3xl sm:text-xl drop-shadow bg-white border-l border-l-black md:hidden z-50 text-lg"
          >
            <div className="w-full flex justify-end">
              <HiOutlineXMark
                onClick={() => setOpen(!open)}
                size={45}
                className="rounded-full p-1 hover:scale-105 transition-all cursor-pointer text-right"
              />
            </div>
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
