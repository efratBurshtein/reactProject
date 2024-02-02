import { createSlice } from '@reduxjs/toolkit'
import UseDelete from '../hooks/deleteHooks'
import UsePut from '../hooks/putHooks'
import UsePost from '../hooks/postHook'
import UseGet from '../hooks/getHook'
const initVal = {
    Users: []
}
const UserSlice = createSlice({
    name: "User",
    initialState: initVal,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet()
            get('https://localhost:7107/api/User/api/GetArrUsers')
            state.Users = data;
        },
        Add: (state, actions) => {
            const post = UsePost()
            post('https://localhost:7107/api/User/api/AddUser', actions.payload.user)
        },
        Delete: (state, actions) => {
          
            const Delete = UseDelete()
            Delete('https://localhost:7107/api/DeleteUser/' + actions.payload.id)
        },
        Edit: (state, actions) => {       
            const put = UsePut()
            put('https://localhost:7107/api/UpdateUser', actions.payload.user)
         },
    }

})
export const {Get, Add, Delete ,Edit} = UserSlice.actions
export default UserSlice.reducer