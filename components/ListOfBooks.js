import React from 'react'
import { books } from 'lib/books'
import Image from 'next/image'

function ListOfBooks() {
  return (
    <div>
      <h2 className="text-4xl font-mono font-extrabold my-10">
        Awesome books!
      </h2>
      <div className="flex items-center justify-center flex-col md:flex-row md:justify-start gap-10 max-w-4xl">
        {books?.map(({ id, author, img, title, link, color }) => {
          return (
            <div
              key={id}
              className={`h-72 w-52 rounded-3xl mb-6  flex items-center border-transparent border-2 justify-center transition-all duration-200 hover:scale-105 shadow-xl  hover-orange`}
            >
              <a href={link} target={'_blank'} rel="noreferrer" key={id} className=''>

                  <Image
                    src={img}
                    width={150}
                    height={200}
                    className="rounded-xl"
                  />
                  <h4 className="font-mono">{title}</h4>
                  <small className="font-mono">{author}</small>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListOfBooks
