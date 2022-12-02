import Link from 'next/link'
import { DiReact, DiJavascript1 } from 'react-icons/di'

function ListOfPosts({ posts }) {
  return (
    <div className="relative mb-4 w-full">
      <h2 className="text-4xl font-mono font-extrabold my-5">Latest Posts</h2>
      {posts?.map(({ title, date, slug, tag }) => {
        const color =
          tag === 'react' ? 'cyan-500' : tag === 'js' ? 'yellow-400' : ''

        return (
          <Link href={`/posts/${slug}`} key={slug}>
            <div
              className={`border-2   border-black w-full p-1 mt-5 
              border-b-4  rounded-lg  cursor-pointer  flex items-center  transition-all justify-start z-0  relative hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center scale-95 z-10">
                {tag === 'react' && (
                  <DiReact size={90} className={`mr-2 hover:text-${color}`} />
                )}
                {tag === 'js' && (
                  <DiJavascript1 size={70} className={`mr-2 `} />
                )}
                <div>
                  <h2 className="text-xl font-mono">{title} &rarr;</h2>
                  <small>{date}</small>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ListOfPosts
