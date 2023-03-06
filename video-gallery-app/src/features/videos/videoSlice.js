import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"

const initialState = {
  error: "",
  videos: [],
  isError: false,
  isLoading: false,
}

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags, search }) => {
    return await getVideos(tags, search)
  }
)

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true
      state.isError = false
      // state.error = ""
      // state.videos = []
    })

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false
      // state.isError = false
      // state.error = ""
      state.videos = action.payload
    })

    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.error?.message
      state.videos = []
    })
  },
})

export default videoSlice.reducer
