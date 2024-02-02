import { createSlice } from '@reduxjs/toolkit'
import UseDelete from '../hooks/deleteHooks'
import UsePut from '../hooks/putHooks'
import UsePost from '../hooks/postHook'
import UseGet from '../hooks/getHook'
const initVal = {
    Posts: []
}
const PostSlice = createSlice({
    name: "Posts",
    initialState: initVal,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet()
            get('https://localhost:7107/api/Post/api/GetArrPosts')
            state.Posts = data;
        },
        Add: (state, actions) => {
            const post = UsePost()
            post('https://localhost:7107/api/Post/api/AddPost', actions.payload.post)
          
        },
        Delete: (state, actions) => {
            const Delete = UseDelete()
            Delete('https://localhost:7107/api/DeletePost/' + actions.payload.id)
        },
        Edit: (state, actions) => {     
            const put = UsePut()
            put('https://localhost:7107/api/UpdatePost', actions.payload.post)
         },
    }

    
        
    
})
export const {Get, Add, Delete ,Edit} = PostSlice.actions
export default PostSlice.reducer
