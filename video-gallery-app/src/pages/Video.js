import VideoPlayer from "../components/description/Player"
import VideoDescription from "../components/description/VideoDescription"
import RelatedVideoList from "../components/list/RelatedVideoList"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchSingleVideo } from "../features/singleVideo/singleVideoSlice"

export default function Video() {
  const { videoId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleVideo(videoId))
  }, [dispatch, videoId])

  const getSingleVideo = useSelector((state) => state.singleVideo)
  const { error, singleVideo, isError, isLoading } = getSingleVideo
  let content = null

  if (isLoading) content = <div className='col-span-12'>Loading...</div>
  if (!isLoading && isError)
    content = <div className='col-span-12'>{error}</div>
  if (!isLoading && !isError && !singleVideo?.id)
    content = <div className='col-span-12'>No Video Found!</div>
  if (!isLoading && !isError && singleVideo?.id)
    content = (
      <div className='grid grid-cols-3 gap-2 lg:gap-8'>
        <div className='col-span-full w-full space-y-8 lg:col-span-2'>
          <VideoPlayer
            videoSrc={singleVideo.link}
            videoTitle={singleVideo.title}
          />

          <VideoDescription
            videoTitle={singleVideo.title}
            videoTags={singleVideo.tags}
            videoDate={singleVideo.date}
            videoLikes={singleVideo.likes}
            videoUnlikes={singleVideo.unlikes}
            videoDescription={singleVideo.description}
          />
        </div>

        <RelatedVideoList
          currentVideoId={videoId}
          tags={singleVideo.tags}
          limit={5}
        />
      </div>
    )
  return (
    <div>
      <section className='pt-6 pb-20'>
        <div className='mx-auto max-w-7xl px-2 pb-20 min-h-[400px]'>
          {content}
        </div>
      </section>
    </div>
  )
}
