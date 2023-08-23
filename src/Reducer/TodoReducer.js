function TodoReducer(state , action){
  if(action.type =="add_todo"){
   let textTodo = action.payload.textTodo ;
    return([
    ...state,
    { id: state.length + 1, todoData: textTodo, finished: false },
  ])
  }
  else if(action.type == "edit_todo"){
    let todo = action.payload.todo ;
    let textTodo = action.payload.textTodo ;
    const updatedList = state.map((t) => {
        if(t.id == todo.id){
            todo.todoData = textTodo ;
        }
        return t ;
    })
      return(updatedList) ;  
   }
 

  else if(action.type == "delete_todo"){
    let todo = action.payload.todo ;
    const updatedList = state.filter((t) => t.id != todo.id)
     return(updatedList) ; 
  }
  else if(action.type== 'finished_todo'){
    let todo = action.payload.todo ;
    let isFinished = action.payload.isFinished ;
    const updatedList = state.map(t => {
        if(t.id == todo.id){
            todo.finished =isFinished  ;
        }
        return t ;
    });
    return updatedList ;
  }
}

export default TodoReducer ;