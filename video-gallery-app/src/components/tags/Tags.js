import Tag from "./Tag"
import { useDispatch, useSelector } from "react-redux"
import { fetchTags } from "../../features/tags/tagsSlice"
import { useEffect } from "react"

export default function Tags() {
  const dispatch = useDispatch()
  const getTags = useSelector((state) => state.tags)

  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])
  const { error, tags, isError, isLoading } = getTags

  let content
  if (isLoading)
    content = (
      <div className='text-[coral] text-xl font-semibold'>Loading...</div>
    )

  if (!isLoading && isError)
    content = <div className='text-[coral] text-xl font-semibold'>{error}</div>

  if (!isLoading && !isError && tags?.length === 0)
    content = (
      <div className='text-[coral] text-xl font-semibold'>
        No Tags Available Here!
      </div>
    )

  if (!isLoading && !isError && tags?.length > 0)
    content = tags?.map((tag) => <Tag key={tag.id} tag={tag.title} />)

  return (
    <section>
      {tags.length > 0 ? (
        <div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
          {content}
        </div>
      ) : (
        <div
          className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'
          style={{ display: "none" }}>
          {content}
        </div>
      )}
    </section>
  )
}
