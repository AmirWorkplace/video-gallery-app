import React, { useEffect } from "react"
import VideoGridItem from "./VideoGridItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchVideos } from "../../features/videos/videoSlice"

export default function VideGrid() {
  const dispatch = useDispatch()
  const { error, videos, isError, isLoading } = useSelector(
    (state) => state.videos
  )

  const { tags, search } = useSelector((state) => state.filters)
  useEffect(() => {
    dispatch(fetchVideos({ tags, search }))
  }, [dispatch, tags, search])

  let content

  if (isLoading) content = <div className='col-span-12'>Loading...</div>
  if (!isLoading && isError)
    content = <div className='col-span-12'>{error}</div>
  if (!isLoading && !isError && videos?.length === 0)
    content = <div className='col-span-12'>No Videos Found!</div>
  if (!isLoading && !isError && videos?.length > 0)
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ))

  return (
    <section className='pt-12'>
      <section>
        <div className='grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]'>
          {content}
          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  )
}
