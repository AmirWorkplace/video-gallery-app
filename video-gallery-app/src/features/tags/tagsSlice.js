import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getTags } from "./tagsAPI"

const initialState = {
  error: "",
  tags: [],
  isError: false,
  isLoading: false,
}

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  return await getTags()
})

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.isLoading = true
      state.isError = false
    })

    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.isLoading = false
      state.tags = action.payload
    })

    builder.addCase(fetchTags.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.error = action.error?.message
      state.tags = []
    })
  },
})

export default tagsSlice.reducer
