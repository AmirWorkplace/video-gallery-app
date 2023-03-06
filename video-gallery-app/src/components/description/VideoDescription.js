import LikeUnlike from "./LikeUnlike"

export default function VideoDescription({
  videoTags,
  videoDate,
  videoLikes,
  videoTitle,
  videoUnlikes,
  videoDescription,
}) {
  return (
    <div>
      <h1 className='text-lg font-semibold tracking-tight text-slate-800'>
        {videoTitle}
        <div className='flex items-start justify-start gap-3 leading-5 mb-1 text-[17px]'>
          <strong className='capitalize mr-2 font-semibold text-cyan-900'>
            Tags :
          </strong>
          {videoTags.map((tag, index) => (
            <h3
              className=' font-[500] text-slate-600 uppercase underline'
              key={index}>
              #{tag}
            </h3>
          ))}
        </div>
      </h1>
      <div className='pb-4 flex items-center space-between border-b'>
        <h2 className='text-sm leading-[1.7142857] text-slate-600 w-full'>
          {videoDate}
        </h2>

        <LikeUnlike likes={videoLikes} unlikes={videoUnlikes} />
      </div>

      <div className='mt-4 text-sm text-[#334155] dark:text-slate-400'>
        {videoDescription}
      </div>
    </div>
  )
}
