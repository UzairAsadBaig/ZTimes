import { createSlice } from '@reduxjs/toolkit'

//*** Declare your state variable here
const initialState = {
  announcements: [],
  counterFlag: true,
  currentWinners: []
  }

export const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    setAnnouncements:(state,action)=>{
      state.announcements=action.payload;
    },
    setCounterFlag: ( state, action ) => {
      state.counterFlag=action.payload;
    },
    setCurrentWinners: ( state, action ) => {
      console.log( "hi" )
      state.currentWinners=action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAnnouncements, setCounterFlag, setCurrentWinners }=announcementSlice.actions

export default announcementSlice.reducer