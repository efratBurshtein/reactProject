import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../hooks/getHook';
import UsePost from '../hooks/postHook';
import UsePut from '../hooks/putHooks';
import UseDelete from '../hooks/deleteHooks';
const initVal = {
    Task: []
}
const TaskSlice = createSlice({
    name: "Task",
    initialState: initVal,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet()
            get('https://localhost:7107/api/ToDo/api/GetArrToDos')
            state.Task = data;
        },
        Add: (state, actions) => {
            //    state.Task.push(actions.payload.task)
            console.log(actions.payload.task);
            const post = UsePost()
            post('https://localhost:7107/api/ToDo/api/AddTodo', actions.payload.task)
        },
        Delete: (state, actions) => {

            const Delete = UseDelete()
            Delete('https://localhost:7107/api/DeleteTodo/' + actions.payload.id)
        },
        Edit: (state, actions) => {
            const put = UsePut()
            put('https://localhost:7107/api/UpdateTodo', actions.payload.task)
        },
    }
})
export const { Get, Add, Delete, Edit } = TaskSlice.actions
export default TaskSlice.reducer