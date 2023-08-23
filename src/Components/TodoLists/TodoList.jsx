import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../Context/TodoContext';
import TodoDispatchContext from '../Context/TodoDispatchContext';
function TodoList(){
 
  function onFinished( todo , isFinished){
   
    dispatch({type:'finished_todo' , payload:{todo , isFinished : isFinished}});

   }

   function onDelete(todo){
    
        dispatch({type:'delete_todo' , payload:{todo}});
      
   }
  
   function onEdit(todo , textTodo){
   
        dispatch({type:'edit_todo' , payload:{todo ,textTodo}});
        setinputText('');
   
   }


    const {list , setList} = useContext(TodoContext) ;
    const { dispatch} = useContext(TodoDispatchContext);
    
   return(
    <>
       <div>
        { list.length > 0 && 
        list.map((todo) => <Todo 
                           key={todo.id} 
                           id={todo.id} 
                           isFinished={todo.finished} 
                           todoData={todo.todoData}
                           changeFinished={(isFinished) => onFinished(todo , isFinished)}
                           onDelete={() => {onDelete(todo)}}
                        
                           onEdit={(textTodo) => onEdit(todo , textTodo) }
                            />
        )}
       </div>
    </>
   )
}
export default TodoList ;