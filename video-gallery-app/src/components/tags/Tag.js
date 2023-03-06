import { useDispatch, useSelector } from "react-redux"
import { tagsSelected, tagsRemoved } from "../../features/filters/filterSlice"

export default function Tag({ tag }) {
  const dispatch = useDispatch()

  function tagSelectionHandler() {
    if (isTagSelected) {
      dispatch(tagsRemoved(tag))
    } else {
      dispatch(tagsSelected(tag))
    }
  }
  const { tags: selectedTags } = useSelector((state) => state.filters)

  const isTagSelected = selectedTags.includes(tag) ? true : false
  const isStyles = isTagSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer capitalize"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer capitalize"

  return (
    <div className={isStyles} onClick={tagSelectionHandler}>
      {tag}
    </div>
  )
}
