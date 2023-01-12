import React from 'react'
import { youtubeChannels } from '../lib/youtubeChannels'
function Sidebar() {
  return (
    <div className="hidden md:flex overflow-y-auto    border-black h-full flex-col justify-start items-center ml-10 text-center px-5 ">
      <h2 className="text-2xl font-mono font-extrabold my-5 ">
        Canales de Youtube que visito
      </h2>
      {youtubeChannels.map(({ name, img, link }) => {
        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-24 font-mono p-2  [&>img]:hover:ring-blue-500   hover:scale-110 transition-all hover:text-blue-500"
            key={`youtube channel of ${name}` }
          >
            <img
              src={img}
              className="w-full rounded-full ring-2 ring-transparent transition-all ring-offset-1"
              alt={`img-${name}`}
            />
            <h3 className='font-bold'>{name}</h3>
          </a>
        )
      })}
    </div>
  )
}

export default Sidebar
