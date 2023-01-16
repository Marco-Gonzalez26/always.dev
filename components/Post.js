import Link from 'next/link'
import { DiReact, DiJavascript1 } from 'react-icons/di'
import { BiRightArrowAlt } from 'react-icons/bi'
export const Post = ({ title, slug, tag, date }) => {
  return (
    <Link href={`/posts/${slug}`} key={`Post-${slug}`}>
      <div
        className="border-2 border-black w-full p-2 mt-5 border-b-4
    rounded-lg cursor-pointer items-center justify-start z-0 relative
    hover:bg-gradient-to-r from-green-50 to-violet-50 flex
    [&>div>svg]:hover:scale-110 [&>div>div>h2>svg]:hover:translate-x-3 hover:text-blue-500 hover:border-blue-500"
      >
        <div className="flex items-center justify-start   w-full ">
          {tag === 'react' && (
            <DiReact size={70} className="mr-2 transition-all" />
          )}
          {tag === 'js' && (
            <DiJavascript1 size={70} className="mr-2 transition-all" />
          )}
          <div className="">
            <h2 className="text-xl font-mono flex items-center">
              {title} <BiRightArrowAlt className='block mr-2 transition-all'/>
            </h2>
            <small>{date}</small>
          </div>
        </div>
      </div>
    </Link>
  )
}
