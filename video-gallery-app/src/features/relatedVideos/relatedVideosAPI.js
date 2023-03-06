import axios from "../../utils/axios"

export const getRelatedVideos = async (id, tags, limit) => {
  const filterByTagQuery =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`

  // console.log(`http://localhost:9000/videos/?${filterByTagQuery}`)

  const response = await axios.get(`/videos/?${filterByTagQuery}`)
  return response.data
}
