import { Link } from "react-router-dom"

export default function VideoGridItem({ video = {} }) {
  const {
    id,
    title,
    // description,
    author,
    avatar,
    date,
    duration,
    views,
    // link,
    thumbnail,
    // tags,
    // likes,
    // unlikes,
  } = video
  return (
    <div className='col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]  border-[1px] p-1 border-slate-300 rounded-md shad-1'>
      <div className='w-full flex flex-col'>
        <div className='relative'>
          <Link to={`/videos/${id}`}>
            <img
              src={thumbnail}
              className='w-full h-auto rounded-md'
              alt={title}
            />
          </Link>

          <p className='absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py'>
            {duration}
          </p>
        </div>

        <div className='flex flex-row mt-2 gap-2'>
          <Link to='/videos/1' className='shrink-0'>
            <img src={avatar} className='rounded-full h-6 w-6' alt={author} />
          </Link>

          <div className='flex flex-col'>
            <Link to='/videos/1'>
              <p className='text-slate-900 text-sm font-semibold'>{title}</p>
            </Link>
            <Link
              to='/videos/1'
              className='text-gray-400 text-xs mt-2 hover:text-gray-600'>
              {author}
            </Link>
            <p className='text-gray-400 text-xs mt-1'>
              {views} views | {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
// shadow-[1px_10xp_20px_5px_rgba(0,0,0,0.1),20xp_30px_50px_rgba(0,0,0,0.1),10xp_20px_5px_rgba(0,0,0,0.1),10xp_20px_5px_rgba(0,0,0,0.1)]
