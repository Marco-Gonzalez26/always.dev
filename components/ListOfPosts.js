import { Post } from './Post'

function ListOfPosts({ posts }) {
  return (
    <div className="relative mb-4 w-full">
      <h2 className="text-4xl font-mono font-extrabold my-5">Últimos Posts</h2>
      {posts?.map(({ title, date, slug, tag }) => {
        return <Post title={title} date={date} slug={slug} tag={tag} />
      })}
    </div>
  )
}

export default ListOfPosts
