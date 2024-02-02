import { createSlice } from '@reduxjs/toolkit'
import UseDelete from '../hooks/deleteHooks'
import UsePost from '../hooks/postHook'
import UseGet from '../hooks/getHook'
const initVal = {
  Photoes: [
    // {
    //     id:0,
    //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',

    //   },
    //   {
    //     id:1,
    //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',

    //   },
    //   {
    //     id:2,
    //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',

    //   },
    //   {
    //     id:3,
    //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',

    //   },
    //   {
    //     id:4,
    //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',

    //   },
    //   {
    //     id:5,
    //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',

    //   },
    //   {
    //     id:6,
    //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',

    //   },
    //   {
    //     id:7,
    //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',

    //   },
    //   {
    //     id:8,
    //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',

    //   },
    //   {
    //     id:9,
    //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',

    //   },
    //   {
    //     id:10,
    //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',

    //   },
    //   {
    //     id:11,
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',

    //   },
  ]
}
const PhotoSlice = createSlice({
  name: "Photo",
  initialState: initVal,
  reducers: {
    Get: (state) => {
      const [get, data] = UseGet()
      get('https://localhost:7107/api/Photo/api/GetArrPhoto')
      state.Photoes = data;
    },
    Add: (state, actions) => {
      const post = UsePost()
      post('https://localhost:7107/api/Photo/api/AddPhoto', actions.payload.photo)
    },
    Delete: (state, actions) => {
      const Delete = UseDelete()
      Delete('https://localhost:7107/api/Photo/api/DeletePhoto/' + actions.payload.id)
    },

  }
})
export const { Get, Add, Delete } = PhotoSlice.actions
export default PhotoSlice.reducer