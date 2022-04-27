import { createSlice } from '@reduxjs/toolkit'

//*** Declare your state variable here
const initialState = {
  announcements: [],
  }

export const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    setAnnouncements:(state,action)=>{
      state.announcements=action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAnnouncements} = announcementSlice.actions

export default announcementSlice.reducer