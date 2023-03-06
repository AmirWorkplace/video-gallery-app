import axios from "../../utils/axios"

export const getSingleVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`)
  return response.data
}
