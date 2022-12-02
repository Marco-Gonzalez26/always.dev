import React from 'react'
import icons from 'lib/icons'
function Footer() {
  return (
    <footer className="flex items-center justify-center  border-t-black border-t  w-full py-4 z-50 relative bg-white h-28 flex-col">
      <small>This blog is made with ❤️ by always.dev</small>
      <div className='flex gap-2 mt-2'>
        {icons.map(({ Icon, link }) => {
          return (
            <a href={link} target="__blank" rel="noreferrer" className="text-2xl hover:scale-105 transition-all">
              <Icon />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
