export const addToDo=(text)=>{
    return{type:'ADD_TODO', payload:{text:text}};
};
export const delToDo=(id)=>{
    return{type:'DEL_TODO', payload:{id:id}};
};