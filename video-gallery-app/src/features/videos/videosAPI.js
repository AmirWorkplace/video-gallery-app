import axios from "../../utils/axios"
// import { useSelector } from "react-redux"
// import { store } from "../../app/store"

export const getVideos = async (tags, search) => {
  let searchQuery = ""

  if (tags.length > 0)
    searchQuery += tags.map((tag) => `tags_like=${tag}`).join("&")
  if (search !== "") searchQuery += `&q=${search}`
  // console.log(store.getState())
  // const filters = useSelector((state)=>state.filters)
  const response = await axios.get(`/videos/?${searchQuery}`)
  return response.data
}
