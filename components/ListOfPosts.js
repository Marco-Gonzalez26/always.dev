import Link from 'next/link'
import { DiReact, DiJavascript1 } from 'react-icons/di'

function ListOfPosts({ posts }) {
  return (
    <div className="relative mb-4 w-full">
      <h2 className="text-4xl font-mono font-extrabold my-5">Últimos Posts</h2>
      {posts?.map(({ title, date, slug, tag }) => {
        return (
          <Link href={`/posts/${slug}`} key={`Post-${slug}`}>
            <div
              className="border-2 border-black w-full p-2 mt-5 border-b-4
              rounded-lg cursor-pointer items-center justify-start z-0 relative
              hover:bg-gradient-to-r from-green-50 to-violet-50 flex
              [&>div>svg]:hover:scale-110 hover:text-blue-500 hover:border-blue-500"
            >
              <div className="flex items-center justify-start   w-full ">
                {tag === 'react' && (
                  <DiReact size={70} className="mr-2 transition-all" />
                )}
                {tag === 'js' && (
                  <DiJavascript1 size={70} className="mr-2 transition-all" />
                )}
                <div className="">
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
