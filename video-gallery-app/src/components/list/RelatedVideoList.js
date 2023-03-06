import React, { useEffect } from "react"
import RelatedVideoListItem from "./RelatedVideoListItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice"

export default function RelatedVideoList({ currentVideoId, tags, limit }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id: currentVideoId, tags, limit }))
  }, [dispatch, currentVideoId, tags, limit])

  const getRelatedVideos = useSelector((state) => state.relatedVideos)

  const { error, relatedVideos, isError, isLoading } = getRelatedVideos
  let content = null

  if (isLoading) content = <div className='col-span-12'>Loading...</div>
  if (!isLoading && isError)
    content = <div className='col-span-12'>{error}</div>
  if (!isLoading && !isError && !relatedVideos?.length === 0)
    content = <div className='col-span-12'>No Related Videos Found!</div>
  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((relatedVideo) => (
      <RelatedVideoListItem key={relatedVideo.id} relatedVideo={relatedVideo} />
    ))

  return (
    <div className='col-span-full lg:col-auto max-h-[570px] overflow-y-auto'>
      {content}
    </div>
  )
}
