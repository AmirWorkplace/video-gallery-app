import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getSingleVideo } from "./singleVideoAPI"

const initialState = {
  error: "",
  isError: false,
  singleVideo: {},
  isLoading: false,
}

export const fetchSingleVideo = createAsyncThunk(
  "singleVideo/fetchSingleVideo",
  async (id) => {
    return await getSingleVideo(id)
  }
)

export const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleVideo.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })

    builder.addCase(fetchSingleVideo.fulfilled, (state, action) => {
      state.isLoading = false
      state.singleVideo = action.payload
    })

    builder.addCase(fetchSingleVideo.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.error?.message
      state.singleVideo = []
    })
  },
})

export default singleVideoSlice.reducer
