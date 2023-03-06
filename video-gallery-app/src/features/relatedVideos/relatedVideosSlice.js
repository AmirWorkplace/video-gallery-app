import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosAPI"

const initialState = {
  error: "",
  isError: false,
  relatedVideos: [],
  isLoading: false,
}

export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ id, tags, limit }) => {
    return await getRelatedVideos(id, tags, limit)
  }
)

export const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedVideos.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })

    builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
      state.isLoading = false
      state.relatedVideos = action.payload
    })

    builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.error?.message
      state.relatedVideos = []
    })
  },
})

export default relatedVideosSlice.reducer
