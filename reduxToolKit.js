//store.js
export const store = configureStore({       //from '@reduxjs/toolkit'
    reducer: todoReducer    //from todoSlice.js
})

// todoSlice.js
const initState={
    todos:[{id:Date.now(),title:'todo 1',isEditable:false}]
}
const todoSlice = createSlice({     // from '@reduxjs/toolkit'
    name:'todo',
    initState,
    reducers:{
        addTodo:(state,payload)=>{
            const todo = {id:Date.now(),title:'todo2',isEditable:false}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos.filter(item=>item.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todo.map(item=>item.id==action.payload.id?{...item,title:action.payload.todo}:item)
        }
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;

//root me


