import { configureStore } from "@reduxjs/toolkit"
import tagsReducer from "../features/tags/tagsSlice"
import videosReducer from "../features/videos/videoSlice"
import singleVideoReducer from "../features/singleVideo/singleVideoSlice"
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice"
import filtersReducer from "../features/filters/filterSlice"

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    singleVideo: singleVideoReducer,
    relatedVideos: relatedVideosReducer,
    filters: filtersReducer,
  },
})
