const initialStore={todo:[]};
export const reducer=(state=initialStore,action)=>{
switch(action.type){
    case 'ADD_TODO':{
        let prevTodo=[...state.todo];
        prevTodo.push[action,payload];
        console.log(prevTodo);
        return{
            todo:prevTodo,
        };
    }
    case 'DEL_TODO':{
        let left=state.todo.slice[0,action.payload];
        let right=state.todo.slice[action.payload+1];
        return{todo:left.coccat(right)};
    }
    default:
        return{state};
}
}